import { CHANGE_SOCKET_ADDRESS, UPDATE_CONNECTED } from '../actions/connect-actions.jsx'

const connectReducer = function (state = { address: '', connected: false }, action) {
    switch (action.type) {
        case CHANGE_SOCKET_ADDRESS:
            return { ...state, address: action.payload.newAddress }
        case UPDATE_CONNECTED:
            return { ...state, connected: action.payload.isConnected }

        default:
            return state
    }
}

export default connectReducer
