import React,{Component} from 'react';
import {Text,ImageBackground} from 'react-native'
import {Card,CardSection} from './common'


class SeriesDetail extends Component {
    render(){
        const {id,url,title}= this.props.serie.item
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
                        blurRadius={2}>
                        <Text style={imageText}>
                            {title}
                        </Text>
                    </ImageBackground>               
                </CardSection>
            </Card>
        )
    }
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