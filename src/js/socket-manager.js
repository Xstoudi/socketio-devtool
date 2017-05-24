import *  as sio from 'socket.io-client'

import { updateConnected } from './actions/connect-actions.jsx'
import { addLog } from './actions/listeners-actions.jsx'

export default class SocketManager {
    constructor(store) {
        this.store = store
        this.state = {
            connect: {
                address: '',
                connected: false,
                socketId: ''
            },
            listeners: []
        }

        this.store.subscribe(() => {
            const previousState = this.state
            this.state = { 
                connect: this.store.getState().connectState,
                listeners: this.store.getState().listenersState
            }

            if(this._hasAddressChanged(previousState, this.state) && this.state.connect.address !== '') 
                this._connect()
            if(this.state.listeners.length !== previousState.listeners.length)
                this._updateListeners(this.state.listeners, previousState.listeners)
        })
 
        setInterval(() => {
            if(this._isConnected() !== this.state.connect.connected)
                this.store.dispatch(updateConnected(this._isConnected()))
        }, 500)
    }

    _connect(){
        this.socket = sio.connect(this.state.connect.address)
        this._updateListeners(this.state.listeners)
    }

    _hasAddressChanged(previous = {connect: {}}, actual = {connect: {}}){
        return previous.connect.address !== actual.connect.address
    }

    _updateListeners(actualListeners, previousListeners = []){
        if(this.socket === void 0) return

        actualListeners
            .filter(x => previousListeners.indexOf(x) == -1)
            .concat(previousListeners.filter(x => actualListeners.indexOf(x) == -1))
            .forEach(listener => {
                if(previousListeners.indexOf(listener.eventName) !== -1){
                    console.log('off listener')
                    this.socket.off(listener.eventName)
                }else{
                    console.log('on listener')
                    this.socket.on(listener.eventName, data => {
                        this.store.dispatch(addLog(listener.eventName, data))
                    })
                }
            })
    }

    _isConnected(){
        if(this.socket === void 0) return false
        return this.socket.connected
    }

    emit(eventName, args){
        this.socket.emit(eventName, args)
    }

    disconnect(){
        this.socket.disconnect()
    }
}
