import { SET_LICENSES } from '../actions/licenses-actions.jsx'

const licensesReducer = function (state = {}, action) {
    switch (action.type) {
        case SET_LICENSES:
            return { ...action.payload.licenses }

        default:
            return state
    }
}

export default licensesReducer
