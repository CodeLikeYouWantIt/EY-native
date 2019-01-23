import { GET_POSTS } from '../actions/types'

export const getPosts = (token,seriesId)=> {
    return(dispatch)=>{

        fetch("http://localhost:3000/posts",{
            method:'GET',
            headers:{
                Authorization:token,
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                series_id:seriesId
            })
        }).then(response=> response.json()).then((posts)=>{
            dispatch({
                type:GET_POSTS,
                payload:posts
            })
        })


    }
}
