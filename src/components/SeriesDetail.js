import React,{Component} from 'react';
import {Text,ImageBackground,TouchableHighlight} from 'react-native'
import { Card,CardSection,Button} from './common'
import { connect } from 'react-redux'
import { updateSelectedSeriesId,deleteSeries } from '../actions'

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
                            blurRadius={2}
                            >
                            <Text style={imageText}>
                                {title}
                            </Text>
                        </ImageBackground>     
                    </CardSection>
                </TouchableHighlight>
                <CardSection>
                    <Button
                        buttonText={"Delete"}
                        onPress={() => this.props.deleteSeries(this.props.authToken, id)}
                    />    
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    image:{
        height:300,
        width:300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageText:{
        fontSize:50,
        color:'#fff',
        fontFamily:'Cochin'
    }
}

const mapStateToProps = ({ auth, selectedSeries})=>{
    const {authToken} = auth
    const {seriesId} = selectedSeries
    return {authToken,seriesId}
}
export default connect(mapStateToProps, { updateSelectedSeriesId, deleteSeries })(SeriesDetail);