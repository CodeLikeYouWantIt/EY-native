import {SELECTED_SERIES} from '../actions/types'

const INITIAL_STATE={
    seriesId:""
}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case SELECTED_SERIES:
            return {...state, seriesId: action.payload}
            
        default:
            return state
    }
}