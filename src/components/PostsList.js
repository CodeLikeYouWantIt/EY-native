import React, { Component } from 'react'
import {Text,View} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'


class PostsList extends Component {
    
    constructor(){
        super();

        this.state = {
            posts:[]
        }
    }

    componentWillMount() {
        fetch("http://localhost:3000/posts")
            .then(response => response.json()).then((data) => {
                this.setState({ posts: data })
            })
    }

    render (){
        return (
            <View>
                {this.state.posts.map((post, index)=>(<Text key={index}>{post.body} {index}</Text>))}
            </View>

        )
    }
}


export default PostsList;