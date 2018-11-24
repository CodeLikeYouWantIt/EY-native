import React, { Component } from 'react'
import {Text,View} from 'react-native'

class Posts extends Component {
    
    constructor(){
        super();

        this.state = {
            posts:[]
        }
    }

    // renderPostsList(){
    //     return this.state.posts.map((post, index) =>
    //         <PostDetail key={index} post={post} />
    //     )
    // }

    componentWillMount() {
        fetch("http://localhost:3000/posts")
            .then(response => response.json()).then((data) => {
                this.setState({ posts: data })
            })
    }

    render (){
        return (
            <View>
                {this.state.posts.map((post, index)=>(<Text key={index}>{post.body}</Text>))}
            </View>
        )
    }
}


export default Posts;