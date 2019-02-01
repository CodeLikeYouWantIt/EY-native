import React from 'react'
import { View } from 'react-native'
import { Hoshi } from 'react-native-textinput-effects';

const Input = ({label,placeHolder,value,onChangeText,secureTextEntry,numberOfLines,multiLine})=>{
    const {inputStyle,containerStyle}=styles
    return(
        <View style={containerStyle}>
            <Hoshi
                label = {label}
                borderColor={'#b76c94'}
                backgroundColor={'#FFF'}
                numberOfLines={numberOfLines}
                multiLine={multiLine}

                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeHolder}
                autoCapitalize={'none'}
            />
        </View>

    )
}

const styles = {
    inputStyle:{
        color:"#1b1b1b",
        paddingRight: 5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2
    },
    containerStyle:{
        height:60,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }
}

export {Input};