import { ADD_LISTENER, REMOVE_LISTENER, ADD_LOG, CHANGE_SIZE_LISTENER } from '../actions/listeners-actions.jsx'

const listenersReducer = function (state = [], action) {
    switch (action.type) {
        case ADD_LISTENER:
            return [
                ...state,
                {
                    eventName: action.payload.eventName,
                    reduced: false,
                    logs: []
                }
            ]
        case REMOVE_LISTENER:
            return [...state].filter(element => element.eventName !== action.payload.eventName)
        case ADD_LOG:
            const addLogState = [...state]
            const idx = addLogState.findIndex(listener => listener.eventName === action.payload.eventName)
            if (idx === -1) return state
            addLogState[idx].logs[newState[idx].logs.length] = {
                time: Date.now(),
                content: action.payload.content
            }
            return addLogState
        case CHANGE_SIZE_LISTENER: 
            return changeSizeState = [...state].map(listener => {
                if(listener.eventName === action.payload.eventName)
                    listener.reduced = action.payload.reduced
                
                return listener
            })
        default:
            return state
    }
}

export default listenersReducer
