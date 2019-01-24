import { GET_POSTS } from '../actions/types'

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
