import React,{ Component } from 'react'
import  {ScrollView} from 'react-native'
import SeriesDetail from './SeriesDetail'
import { connect } from 'react-redux'
import {getSeriesList} from '../actions'



class SeriesList extends Component{

    componentDidMount(){
        this.props.getSeriesList(this.props.authToken)
        this.timer = setInterval(() => this.props.getSeriesList(this.props.authToken), 300000)
    }

    renderSeriesList() {
        return this.props.seriesList.map((serie, index) =>
            <SeriesDetail key={index} serie={serie} />
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderSeriesList()}
            </ScrollView>
        )
    }
}

const mapStateToProps = ({auth,series}) => {
    const {authToken} = auth
    const {seriesList} = series
    return{authToken, seriesList}
}

export default connect(mapStateToProps,{getSeriesList})(SeriesList);