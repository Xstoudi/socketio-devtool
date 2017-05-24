export const CHANGE_SOCKET_ADDRESS = 'CHANGE_SOCKET_ADDRESS'
export const UPDATE_CONNECTED = 'UPDATE_CONNECTED'

export function changeSocketAddress(newAddress) {
    return { type: CHANGE_SOCKET_ADDRESS, payload: { newAddress: newAddress } }
}
export function updateConnected(isConnected) {
    return { type: UPDATE_CONNECTED, payload: { isConnected: isConnected } }
}
