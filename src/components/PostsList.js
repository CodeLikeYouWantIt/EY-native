import React, { Component } from 'react'
import {Text,View} from 'react-native'
import { connect } from 'react-redux'
import { getPosts } from '../actions'

class PostsList extends Component {
    componentWillMount(){
        this.props.getPosts(this.props.authToken,this.props.seriesId)
    }

    render (){
        return (
            <View>
                <Text>
                    {this.props.seriesPosts.length}
                </Text>
            </View>
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