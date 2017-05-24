import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import store from '../store.jsx'

class App extends React.PureComponent {

    componentDidMount(){
        if(this.props.location.pathname === '/')
            this.props.history.replace('/listener')
        
    }

    render() {
        return (
            <div id="wrapper">
                <Header />
                <div className="container">
                    <Sidebar location={this.props.location} />
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({socketAddress: store.connectState.address })

export default withRouter(connect(mapStateToProps)(App))
