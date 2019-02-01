import { GET_POSTS, DELETE_POST, CREATE_POST_SUCCESS, POST_ATTR} from '../actions/types'
import {Actions} from 'react-native-router-flux'

export const getPosts = (token,seriesId)=> {
    return(dispatch)=>{

        fetch("http://localhost:3000/series/posts/"+ seriesId,{
            method:'GET',
            headers:{
                Authorization:token,
                'Content-type':'application/json'
            }
        }).then(response=> response.json()).then((posts)=>{
            dispatch({
                type:GET_POSTS,
                payload:posts
            })
        })
    }
}

export const deletePost= (token, id)=>{
    fetch("http://localhost:3000/posts/"+id,{
        method:'POST',
        headers: {
            Authorization: token,
            'Content-type': 'application/json'
        }
    }).then(response => response.json())
}

export const PostsUpdate = ({ prop, value }) => {
    return {
        type: POST_ATTR,
        payload: { prop, value }
    }
}

export const createPosts = (token,seriesID,userID, body, name)=>{
    return(dispatch)=>{
        fetch('http://localhost:3000/posts',{
            method:'POST',
            headers:{
                Authorization:token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                body: body,
                user_id: userID,
                series_id: seriesID
            })
        })
        .then(() => {
            dispatch({
                type: CREATE_POST_SUCCESS
            })
            Actions.createSeries()
        }).catch(error=>console.log(error))
    }
}