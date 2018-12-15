import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    ERROR_MESSAGE,
    CLEAR_ERROR,     
    LOADING,
    AUTH_TOKEN
        } from './types'

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

export const errorMessage = (text) =>{
    return{
        type:ERROR_MESSAGE,
        payload:text
    }
}

export const clearError = () => {
    return {
        type: CLEAR_ERROR,
        payload: ""
    }
}

export const isLoading = (text) => {
    return {
        type: LOADING,
        payload: text
    }
}

export const storeAuthToken = (text) => {
    return {
        type: AUTH_TOKEN,
        payload: text
    }
}