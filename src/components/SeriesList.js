import React,{ Component } from 'react'
import  {ScrollView} from 'react-native'
import SeriesDetail from './SeriesDetail'
import { connect } from 'react-redux'



class SeriesList extends Component{

    constructor(){
        super()
        this.state = { 
            series: [] 
        }
    }

    componentWillMount(){
        fetch("http://localhost:3000/series",{
            method: 'GET',
            headers:{
                Authorization:this.props.authToken,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
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

const mapStateToProps = ({auth}) => {
    const {authToken} = auth
    return{authToken}
}

export default connect(mapStateToProps)(SeriesList);