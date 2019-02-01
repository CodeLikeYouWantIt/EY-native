import React from 'react';
import { Text,View } from 'react-native'
import {Card,CardSection} from './common'


const PostsDetails = ({ post }) => {
    const {name,body} = post.item

    const {
        header,
        headerTextStyle,
        headerContentStyle
    } = styles

    return (
        <Card>
            <Text style={header}>{name}</Text>
            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{body}</Text>
                </View>
            </CardSection>
        </Card>
    )
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        topMargin: 1
    },
    headerTextStyle: {
        color: "#1b1b1b",
        margin:5,
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 32,
        flex: 1,
        letterSpacing: 1.0
    },
    header:{
        fontSize:30,
        color:'#1b1b1b',
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
}





export default PostsDetails;