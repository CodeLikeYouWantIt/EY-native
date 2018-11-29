import React from 'react'
import { Text, View } from 'react-native'


const Header = (props) => {
    const {headerStyle,viewStyle} = styles
    return (
        <View style={viewStyle}>
            <Text style = {headerStyle}>{props.header}</Text>
        </View>
    )
}


const styles = {
    headerStyle:{
        fontSize:25,
        flex: 1,
        alignSelf: 'center',
        paddingTop:10
    },
    viewStyle:{
        backgroundColor:'#f8f8f8',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:30,
        height:80,
        shadowColor:'#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.2,
        elevation:2,
        position:'relative'
    }

}


export {Header};
