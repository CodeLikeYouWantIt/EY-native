import{GET_POSTS} from '../actions/types'


const INITIAL_STATE= {
    seriesPosts:[]
}

export default (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case GET_POSTS:
            return{...state,seriesPosts:action.payload}

        default:
            return state
    }
}