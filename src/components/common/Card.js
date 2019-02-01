import React from 'react'
import {View} from 'react-native'

const Card = (props) => {
    const{containerStyle}=styles;

    return(
        <View style={containerStyle}>  
            {props.children}
        </View>
    )

}

const styles ={
    containerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:"#ddd",
        marginBottom: 2,
        flex:1,
        backgroundColor:'#fff'
    }
}


export {Card};