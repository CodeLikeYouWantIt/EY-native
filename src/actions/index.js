import {EMAIL_CHANGED, PASSWORD_CHANGED, CLEAR_EMAIL_STATE} from './types'
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

export const clearEmailState = () => {
    return{
        type:CLEAR_EMAIL_STATE,
        payload:""
    }
}