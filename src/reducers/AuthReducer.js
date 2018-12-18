import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGIN_USER,
         LOGOUT_USER} from '../actions/types'

const INITIAL_STATE = { email:'',
                        password:'',
                        error:'',
                        loading:false,
                        authToken: '',
                        userID:''
                    }

export default (state= INITIAL_STATE,action) => {
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state, email:action.payload}

        case PASSWORD_CHANGED:
            return {...state, password:action.payload}
            
        case LOGIN_USER:
            return { ...state, loading:true , error:''}

        case LOGOUT_USER:
            return {...state, ...INITIAL_STATE}

        case LOGIN_USER_SUCCESS:
            return { ...state,
                        authToken: action.payload.auth_token,
                        error: '',
                        loading: false,
                        password:'',
                        userID: action.payload.user_id
                    }

        case LOGIN_USER_FAIL:
            return { ...state, error: action.payload, password:'',loading:false}

        default:
        return state
    }
}