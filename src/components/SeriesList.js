import React,{ Component } from 'react'
import  {FlatList,View, Text} from 'react-native'
import SeriesDetail from './SeriesDetail'
import WordofDay from '../components/WordOfDay'
import { connect } from 'react-redux'
import {getSeriesList} from '../actions'
import {CardSection, Card} from './common'



class SeriesList extends Component{

    componentDidMount(){
        this.props.getSeriesList(this.props.authToken)
        // this.timer = setInterval(() => this.props.getSeriesList(this.props.authToken), 30000)
    }

    renderSeriesList(serie) {
        return <SeriesDetail serie={serie}/>
    }

    render() {
        return (
            < Card style={styles.container} >
                < WordofDay />

                <CardSection>
                    <FlatList
                    data={this.props.seriesList}
                    renderItem={this.renderSeriesList}
                    keyExtractor={(serie)=> serie.id.toString() }
                    horizontal={true}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.containerStyle}>
                        Something Else Here
                    </Text>
                </CardSection>
            </Card >
        )
    }
}

const styles = {
    container: {
        flex:1,
        backgroundColor:'#fff'
    }, 
    containerStyle: {
        fontSize: 30,
        color: '#1b1b1b',
        margin: 5,
        textAlign: 'center',
        flex: 1,
        justifyContent: 'center',
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        height:100
    }
}

const mapStateToProps = ({auth,series}) => {
    const {authToken} = auth
    const {seriesList} = series
    return{authToken, seriesList}
}

export default connect(mapStateToProps,{getSeriesList})(SeriesList);