import React from 'react';
import {Text,Image,View} from 'react-native'
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
                <Image
                    style={image}
                    source = {{uri:url}}
                    blurRadius= {6}
                />
                <Text style={imageText}>
                    {title}
                </Text>
            </CardSection>
        </Card>
    )
}

const styles = {
    center:{
        justifyContent:'center',
        alignItems:'center'
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
        width:null
    },
    imageText:{
        position:'absolute',
        fontSize:30,
        color:'#fff'
    }
}





export default SeriesDetail;