import React from 'react';
import { Text,View } from 'react-native'
import {Card,CardSection} from './common'


const PostsDetails = ({ post }) => {
    const { id,name,body} = post.item

    const {
        headerTextStyle,
        headerContentStyle
    } = styles

    return (
        <Card>
            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{name}</Text>
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
        fontSize: 20
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