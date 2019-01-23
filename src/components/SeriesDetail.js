import React,{Component} from 'react';
import {Text,ImageBackground,TouchableHighlight} from 'react-native'
import { Card,CardSection} from './common'
import { connect } from 'react-redux'
import { updateSelectedSeriesId } from '../actions'

class SeriesDetail extends Component {
    render(){
        const {id,url,title}= this.props.serie.item
        const {
            image,
            imageText,
        } = styles

        return(
            <Card>
                <TouchableHighlight onPress={() => this.props.updateSelectedSeriesId(id)}>
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
                </TouchableHighlight>
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

export default connect(null, { updateSelectedSeriesId })(SeriesDetail);