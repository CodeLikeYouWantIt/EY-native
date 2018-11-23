import React,{ Component } from 'react'
import  {View,ScrollView} from 'react-native'
import SeriesDetail from './SeriesDetail'



class SeriesList extends Component{

    state = { 
        series: [] 
    }

    renderSeriesList(){
        return this.state.series.map((serie, index) =>
         <SeriesDetail key={index} serie={serie}/>
        )
    }

    componentWillMount(){
        fetch("http://localhost:3000/series")
        .then(response => response.json()).then((data)=>{
            this.setState({series:data})
        })
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