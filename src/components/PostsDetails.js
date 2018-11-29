import React from 'react';
import { Text, Image, View, ImageBackground } from 'react-native'
import {Card,CardSection} from './common'


const PostsDetails = ({ serie }) => {
    const { id,itle} = serie

    const {
        thumbnailContainerStyle,
        thumbnailStyle,
        headerTextStyle,
        headerContentStyle
    } = styles

    return (
        <Card>
            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{id}</Text>
                </View>
            </CardSection>
        </Card>
    )
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
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