import React,{ Component } from 'react'
import  {FlatList,View} from 'react-native'
import SeriesDetail from './SeriesDetail'
import { connect } from 'react-redux'
import {getSeriesList} from '../actions'



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
            <View style={styles.centerBG}>
                <FlatList
                data={this.props.seriesList}
                renderItem={this.renderSeriesList}
                keyExtractor={(serie)=> serie.id.toString() }
                horizontal={true}
                />
            </View>
        )
    }
}

const styles = {
    centerBG: {
        flex:1,
        backgroundColor:'#fff'
    }
}

const mapStateToProps = ({auth,series}) => {
    const {authToken} = auth
    const {seriesList} = series
    return{authToken, seriesList}
}

export default connect(mapStateToProps,{getSeriesList})(SeriesList);