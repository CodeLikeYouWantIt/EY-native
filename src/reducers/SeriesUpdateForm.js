import { SERIES_TITLE } from '../actions/types'

const INITIAL_STATE = {
    seriesTitle:''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SERIES_TITLE:
            return { ...state,[action.payload.prop]: action.payload.value}

        default:
            return state
    }
}