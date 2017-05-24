import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import ListenerContent from './components/content/ListenerContent.jsx'
import EmitterContent from './components/content/EmitterContent.jsx'
import LicenseContent from './components/content/LicenseContent.jsx'
import NotFoundContent from './components/content/NotFoundContent.jsx'
import App from './components/App.jsx'
import store, { history } from './store.jsx'
import SocketManager from './socket-manager.js'

global.socketManager = new SocketManager(store)

export default (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App history={history}>
                <Switch>
                    <Route path="/listener" component={ListenerContent} />
                    <Route path="/emitter" component={EmitterContent} />
                    <Route path="/license" component={LicenseContent} />
                    <Route component={NotFoundContent} />
                </Switch>
            </App>
        </ConnectedRouter>
    </Provider>
)
