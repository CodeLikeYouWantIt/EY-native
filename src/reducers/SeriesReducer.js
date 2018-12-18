import { SERIES_TITLE, CREATE_SERIES_SUCCESS, ON_SERIES_SUCCESS } from '../actions/types'

const INITIAL_STATE = {
    seriesTitle:'',
    url:'',
    seriesList:[]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SERIES_TITLE:
            return { ...state,[action.payload.prop]: action.payload.value}

        case CREATE_SERIES_SUCCESS:
            return {...state, ...INITIAL_STATE}

        case ON_SERIES_SUCCESS:
            return {...state, seriesList:action.payload}
        
        default:
            return state
    }
}