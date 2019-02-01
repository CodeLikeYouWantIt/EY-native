import React,{Component} from 'react'
import {Text} from 'react-native'
import {CardSection, Card} from './common'


class WordOfDay extends Component {

    render(){
        return(
            <CardSection>
                <Text style={styles.heading}>
                    Word of day bruh...
                    .....blah blah
                </Text>
            </CardSection>
        )
    }
}

const styles = {
    heading:{
        fontSize:30,
        color:'#1b1b1b',
        margin:5,
        textAlign:'center',
        flex: 1,
        justifyContent: 'center',
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        marginBottom: 30
    }
}

export default WordOfDay;