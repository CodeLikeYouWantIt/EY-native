import React,{ Component } from 'react'
import  {ScrollView} from 'react-native'
import SeriesDetail from './SeriesDetail'


class SeriesList extends Component{

    constructor(){
        super()
        this.state = { 
            series: [] 
        }
    }

    componentWillMount(){
        fetch("http://localhost:3000/series")
        .then(response => response.json()).then((data)=>{
            this.setState({series:data})
        })
    }
    
    renderSeriesList() {
        return this.state.series.map((serie, index) =>
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

export default SeriesList;