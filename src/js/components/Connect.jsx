import React from 'react'
import { connect } from 'react-redux';

import store from '../store.jsx'
import { changeSocketAddress } from '../actions/connect-actions.jsx'

class Connect extends React.Component {

    constructor() {
        super()

        this._changeAddress = this._changeAddress.bind(this)
    }

    _changeAddress() {
        store.dispatch(changeSocketAddress(this.connectInput.value))
    }

    _disconnect() {
        global.socketManager.disconnect()
    }

    render() {
        const connect = (
            <div className="connect">
                <input
                    ref={connectInput => { this.connectInput = connectInput }}
                    className="input"
                    placeholder="Socket.IO Server Address"
                    type="text"
                    onKeyDown={event => { if (event.which == 13) this._changeAddress() }}
                />
                <button className="button btn-info" onClick={this._changeAddress}>Connect</button>
            </div>
        )

        const disconnect = (
            <div className="disconnect">
                <span style={{marginRight: "15px"}}>Connected to {this.props.address}</span>
                <button className="button btn-danger" onClick={this._disconnect}>Disconnect</button>
            </div>
        )

        return (
            <div className="connect-box">
                {this.props.connected ? disconnect : connect}
            </div>
        )
    }
}

const mapStateToProps = store => ({ ...store.connectState })

export default connect(mapStateToProps)(Connect)
