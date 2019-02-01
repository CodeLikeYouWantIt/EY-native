import{GET_POSTS, CREATE_POST_SUCCESS, POST_ATTR} from '../actions/types'


const INITIAL_STATE= {
    seriesPosts:[],
    name: '',
    body:''
}

export default (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case GET_POSTS:
            return{...state,seriesPosts:action.payload}

        case POST_ATTR:
            return { ...state, [action.payload.prop]: action.payload.value }

        case CREATE_POST_SUCCESS:
            return {...state, ...INITIAL_STATE}

        default:
            return state
    }
}