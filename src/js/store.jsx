import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers/index.jsx'

export const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)

export default store
