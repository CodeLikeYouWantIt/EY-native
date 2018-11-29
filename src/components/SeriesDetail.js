import React from 'react';
import {Text,ImageBackground,Linking} from 'react-native'
import {Card,CardSection,Button} from './common'


const SeriesDetail = ({serie}) => {
    const {url,title,user_id}= serie
    const {
        image,
        imageText,
    } = styles

    return(
        <Card>
            <CardSection>  
                <ImageBackground
                    style={image}
                    source={{ uri: url }}
                    blurRadius={4}>
                    <Text style={imageText}>
                        {title}
                    </Text>
                </ImageBackground>               
            </CardSection>

            <CardSection>
                <Button 
                    onPress={()=>Linking.openURL(url)} 
                    buttonText={"Click Me"}
                />
            </CardSection>
        </Card>
    )
}

const styles = {
    image:{
        height:300,
        flex: 1,
        width:null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageText:{
        fontSize:50,
        color:'#fff',
        fontFamily:'Cochin'
    }
}





export default SeriesDetail;