import Redux, { combineReducers } from 'redux'

import connectReducer from './connect-reducer.jsx'
import listenersReducer from './listeners-reducer.jsx'
import licensesReducer from './licenses-reducer.jsx'

const reducers = { 
    connectState: connectReducer,
    listenersState: listenersReducer,
    licensesState: licensesReducer
}

export default reducers
