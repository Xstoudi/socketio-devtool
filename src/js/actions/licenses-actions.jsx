export const SET_LICENSES = 'SET_LICENSES'

export function setLicenses(licenses) {
    return { type: SET_LICENSES, payload: { licenses } }
}
