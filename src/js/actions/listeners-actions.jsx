export const ADD_LISTENER = 'ADD_LISTENER'
export const REMOVE_LISTENER = 'REMOVE_LISTENER'
export const ADD_LOG = 'ADD_LOG'
export const CHANGE_SIZE_LISTENER = 'CHANGE_SIZE_LISTENER'

export function addListener(eventName) {
    return { type: ADD_LISTENER, payload: { eventName } }
}
export function removeListener(eventName) {
    return { type: REMOVE_LISTENER, payload: { eventName } }
}
export function addLog(eventName, content) {
    return { type: ADD_LOG, payload: { eventName, content } }
}
export function changeSize(eventName, reduced) {
    return { type: CHANGE_SIZE_LISTENER, payload: { eventName, reduced } }
}
