import React from 'react';
import {Text,Image,View,ImageBackground} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'


const SeriesDetail = ({serie}) => {
    const {url,title,user_id}= serie
    const {
        headerContentStyle,
        thumbnailContainerStyle,
        thumbnailStyle,
        headerTextStyle,
        image,
        imageText,
        center
    } = styles

    return(
        <Card>
            <CardSection>  
                <ImageBackground
                    style={image}
                    source={{ uri: url }}
                    blurRadius={6}>
                    <Text style={imageText}>
                        {title}
                    </Text>
                </ImageBackground>               
            </CardSection>
        </Card>
    )
}

const styles = {
    center:{
        flex:1
    },
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerTextStyle:{
        fontSize:18
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    image:{
        height:300,
        flex: 1,
        width:null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageText:{
        fontSize:30,
        color:'#fff'
    }
}





export default SeriesDetail;