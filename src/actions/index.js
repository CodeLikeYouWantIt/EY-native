import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    ERROR_MESSAGE,
    LOADING,
    AUTH_TOKEN,
    LOGIN_USER_SUCCESS
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

export const loginUser= ({email,password}) =>{
    return (dispatch)=>{
        fetch('http://localhost:3000/authenticate',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password:password
            })
        })
        .then(user => {
            dispatch({
                type:LOGIN_USER_SUCCESS,
                payload: JSON.parse(user._bodyInit).auth_token
            })
        }).catch(() =>{
            fetch('http://localhost:3000/authenticate', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then(error => {
                dispatch({
                    type: ERROR_MESSAGE,
                    payload: error._bodyInit
                })
            })
        })
    }
}