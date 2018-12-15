import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         ERROR_MESSAGE,
         CLEAR_ERROR,
         LOADING, 
         AUTH_TOKEN } from '../actions/types'

const INITIAL_STATE = {email:'',password:'',error:'',loading:false, authToken: ''}

export default (state= INITIAL_STATE,action) => {
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state, email:action.payload}

        case PASSWORD_CHANGED:
            return {...state, password:action.payload}
            
        case ERROR_MESSAGE:
            return {...state, error:action.payload}

        case CLEAR_ERROR:
            return  {...state, error:action.payload}

        case LOADING:
            return { ...state, loading: action.payload }

        case AUTH_TOKEN:
            return { ...state, authToken: action.payload }

        default:
        return state
    }
}