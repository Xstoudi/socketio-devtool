import React from 'react'

import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
    render() {
        const path = this.props.location.pathname
        return (
            <ul className="sidebar">
                <div className="main-menu">
                    <li className={path == '/listener' ? 'active' : ''}>
                        <Link to="/listener"><i className="fa fa-toggle-down" aria-hidden="true"></i>Listener</Link>
                    </li>
                    <li className={path == '/emitter' ? 'active' : ''}>
                        <Link to="/emitter"><i className="fa fa-toggle-up" aria-hidden="true"></i>Emitter</Link>
                    </li>
                </div>

                <div className="infos-list">
                    <li className="infos">
                        <a href="https://github.com/Xstoudi" target="_blank">
                            <i className="fa fa-user" aria-hidden="true"></i>Author
                        </a>
                    </li>
                    <li className="infos">
                        <a href="https://github.com/Xstoudi/socketio-devtool" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i>Source
                        </a>
                    </li>
                    <li className="infos">
                        <Link to="/license"><i className="fa fa-copyright" aria-hidden="true"></i>License</Link>
                    </li>
                </div>
            </ul>
        )
    }
}

export default Sidebar