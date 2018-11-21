import React,{ Component } from 'react'
import  { Text,View,Image } from 'react-native'



class SeriesList extends Component{

        state = { 
            series: [] 
        }

    

    componentWillMount(){
        fetch("http://localhost:3000/series")
        .then(response => response.json()).then((data)=>{
            this.setState({series:data})
        })
    }

    render() {
        return (
            <View>
                {this.state.series.map((serie,index)=> (<Text key={index}>{serie.title}</Text>))}
            </View>
        )
    }
}

export default SeriesList;