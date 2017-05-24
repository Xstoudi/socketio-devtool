import React from 'react'
import { connect } from 'react-redux';
import store from '../../store.jsx'
import { removeListener, changeSize } from '../../actions/listeners-actions.jsx'

class Listener extends React.Component {

    constructor(props) {
        super(props)

        this._reduce = this._reduce.bind(this)
        this._off = this._off.bind(this)
    }

    render() {
        const listenerContent = (
            this.props.infos.logs.length > 0 ? (
                <ul className="logs">
                    {
                        this.props.infos.logs.map(log => (
                            <li className="log">
                                <span className="time"><strong>{new Date(log.time).toLocaleTimeString()}</strong></span>
                                <span className="json-content">{JSON.stringify(log.content)}</span>
                            </li>
                        ))
                    }
                </ul>
            ) : (
                    <p>Waiting for incoming messages !</p>
                )
        )

        const minimizeButton = this.props.infos.reduced ? (
            <i className="fa fa-plus-square-o" aria-hidden="true" onClick={this._reduce} title="Maximize"></i>
        ) : <i className="fa fa-minus-square-o" aria-hidden="true" onClick={this._reduce} title="Minimize"></i>

        return (
            <div className="listener-parent">
                <div className="listener">
                    <div className="listener-header">
                        <p>Listening "{this.props.infos.eventName}"</p>
                        <div className="listener-controls">
                            {minimizeButton}
                            <i className="fa fa-times" aria-hidden="true" onClick={this._off} title="Close"></i>
                        </div>
                    </div>
                    {
                        !this.props.infos.reduced ? listenerContent : null
                    }
                </div>
            </div>
        )
    }

    _off() {
        store.dispatch(removeListener(this.props.infos.eventName))
    }

    _reduce() {
        store.dispatch(changeSize(this.props.infos.eventName, !this.props.infos.reduced))
    }
}

export default Listener
