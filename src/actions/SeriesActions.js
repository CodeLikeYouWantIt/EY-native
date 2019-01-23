import {SERIES_TITLE, CREATE_SERIES_SUCCESS, ON_SERIES_SUCCESS} from '../actions/types'
import {Actions} from 'react-native-router-flux'

export const SeriesUpdate = ({prop,value}) => {
    return {
        type: SERIES_TITLE,
        payload: {prop,value}
    }
}


export const createSeries = (title,url,userID,token) => {
    return(dispatch)=>{
        fetch("http://localhost:3000/series",{
            method:'POST',
            headers:{
                Authorization: token,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                title:title,
                url:url,
                user_id:userID
            })
        })
        .then(() =>{
            dispatch({
                type:CREATE_SERIES_SUCCESS
            })
            Actions.seriesList()
        })
    }
}

export const getSeriesList = (token) => {
    return(dispatch)=>{
        fetch('http://localhost:3000/series',{
            method:'GET',
            headers:{
                Authorization:token,
                'Content-type':'application/json'
            }
        })
        .then(response => response.json()).then((data) => {
            dispatch({
                type:ON_SERIES_SUCCESS,
                payload:data
            })
        })
    }
}



