import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         ERROR_MESSAGE,
         AUTH_TOKEN, 
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGIN_USER} from '../actions/types'

const INITIAL_STATE = {email:'',password:'',error:'',loading:false, authToken: '',}

export default (state= INITIAL_STATE,action) => {
    console.log(action)
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state, email:action.payload}

        case PASSWORD_CHANGED:
            return {...state, password:action.payload}
            
        case LOGIN_USER:
            return { ...state, loading:true }

        case LOGIN_USER_SUCCESS:
            return {...state, authToken: action.payload, error:'',loading:false}

        case LOGIN_USER_FAIL:
            return { ...state, error: action.payload, password:'',loading:false}

        default:
        return state
    }
}