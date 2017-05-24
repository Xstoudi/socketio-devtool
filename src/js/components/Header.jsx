import React from 'react'

import Connect from './Connect.jsx'

class Header extends React.Component {
    render(){
        const v = require('../../../package.json').version;
        return (
            <header>
                <div className="left-header">
                    <h1>SocketIO DevTool<span className="version">v{v}</span></h1>
                    <div className="social">
                        <img src="https://img.shields.io/twitter/follow/Xstoudi.svg?style=social&label=Follow" alt="Follow Xstoudi on Twitter"/>
                        <img src="https://img.shields.io/github/stars/Xstoudi/socketio-devtool.svg?style=social&label=Star" alt="Star SocketIO-Devtools sources"/>
                    </div>
                </div>
                <Connect />
            </header>
        )
    }
}

export default Header
