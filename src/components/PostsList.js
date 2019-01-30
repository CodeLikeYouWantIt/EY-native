import React, { Component } from 'react'
import PostsDetails from './PostsDetails'
import {FlatList} from 'react-native'
import { connect } from 'react-redux'
import { getPosts } from '../actions'
import {Card} from './common'

class PostsList extends Component {
    componentWillMount(){
        this.props.getPosts(this.props.authToken,this.props.seriesId)
    }

    renderPostsList(post){
        return <PostsDetails post={post}/>
    }

    render (){
        return (
            <Card>
                <FlatList
                    data={this.props.seriesPosts}
                    renderItem = {this.renderPostsList}
                    keyExtractor={(post)=> post.id.toString()}
                />
            </Card>
        )
    }
}

const mapStateToProps = ({ selectedSeries,posts,auth }) =>{
    const { seriesPosts } = posts
    const { authToken } = auth
    const { seriesId } = selectedSeries
    return {seriesPosts, authToken, seriesId}
}

export default connect(mapStateToProps,{getPosts})(PostsList);