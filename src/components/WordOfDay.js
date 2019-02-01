import React,{Component} from 'react'
import {Text, View} from 'react-native'
import {CardSection, Card} from './common'


class WordOfDay extends Component {

    render(){
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.heading}>
                    Psalms 32:7
                </Text>
                <Text style={styles.verse}>
                    You are a hiding place for me;
you preserve me from trouble;
you surround me with shouts of deliverance.
                </Text>
            </View>
        )
    }
}

const styles = {
    verse:{
        fontSize: 24,
        color: '#1b1b1b',
        fontStyle: 'italic',
        textAlign:'center',
    },
    heading:{
        fontSize:35,
        color:'#1b1b1b',
    },
    viewStyle:{
        margin:5,
        borderBottomColor: '#1b1b1b',
        borderBottomWidth: .5,
        justifyContent: 'center',
        alignItems:'center',
        height:200
    }
}

export default WordOfDay;