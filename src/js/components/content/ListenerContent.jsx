import React from 'react'
import { connect } from 'react-redux';

import Listener from './Listener.jsx'
import store from '../../store.jsx'
import { addListener } from '../../actions/listeners-actions.jsx'

class ListenerContent extends React.Component {

    constructor() {
        super()

        this._addListener = this._addListener.bind(this)
    }

    render() {
        return (
            <div className="listener-content">
                <h2>Listener</h2>
                <div className="listener-form">
                    <input
                        ref={newListenerInput => { this.newListenerInput = newListenerInput }}
                        className="input"
                        placeholder="Event name"
                        type="text"
                        onKeyDown={event => { if (event.which == 13) { this._addListener() } }}
                    />
                    <button className="button btn-info" onClick={this._addListener}>Create listener</button>
                </div>
                <div className="listener-list">
                    {
                        this.props.listeners.map(event => <Listener infos={event} />)
                    }
                </div>
            </div>
        )
    }

    _addListener() {
        store.dispatch(addListener(this.newListenerInput.value))
        this.newListenerInput.value = ''
    }
}

const mapStateToProps = store => ({ listeners: store.listenersState })

export default connect(mapStateToProps)(ListenerContent)
