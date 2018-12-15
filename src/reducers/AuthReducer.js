import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         ERROR_MESSAGE,
         LOADING, 
         AUTH_TOKEN, 
         LOGIN_USER_SUCCESS} from '../actions/types'

const INITIAL_STATE = {email:'',password:'',error:'',loading:false, authToken: '',}

export default (state= INITIAL_STATE,action) => {
    console.log(action)
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state, email:action.payload}

        case PASSWORD_CHANGED:
            return {...state, password:action.payload}
            
        case ERROR_MESSAGE:
            return {...state, error:action.payload}

        case LOADING:
            return { ...state, loading: action.payload }

        case LOGIN_USER_SUCCESS:
            return {...state, authToken: action.payload, error:''}

        default:
        return state
    }
}