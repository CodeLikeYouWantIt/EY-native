import {EMAIL_CHANGED, PASSWORD_CHANGED, CLEAR_EMAIL} from './types'
export const onEmailChanged = (text) => {
    return{
        type: EMAIL_CHANGED,
        payload:text
    }
}

export const onPasswordChanged = (text) => {
    return {
        type:PASSWORD_CHANGED,
        payload:text
    }
}

export const clearEmail = () => {
    return{
        type:CLEAR_EMAIL,
        payload:""
    }
}

export const clearPasswordState = () => {
    return {
        type: CLEAR_EMAIL_STATE,
        payload: ""
    }
}