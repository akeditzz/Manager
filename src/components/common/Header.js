import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Header = ({title}) =>{
    const {textStyle,viewstyle} = styles
    return<View style={viewstyle}>
    <Text style={textStyle}>{title}</Text>
    </View> 
}

const styles = StyleSheet.create({
    viewstyle:{
        backgroundColor:'#00FFFF',
        justifyContent:'center',
        alignItems:'center',
        height:56,
        shadowColor:'#000000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'
    },
    textStyle:{
        fontSize:20,
        color:'#000000'
    }
})

export {Header}