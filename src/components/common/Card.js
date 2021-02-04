import React from 'react'
import {View, StyleSheet} from 'react-native'

const Card = (props)=>{
    return <View style={styles.containerStyle}>
        {props.children}
    </View>
}

const styles = StyleSheet.create({
    containerStyle:{
        marginTop:8,
        marginLeft:8,
        marginRight:8,
        elevation:2,
        position:'relative',
        shadowColor:'#000',
        borderRadius:4,
        backgroundColor:'#fff',
        shadowOpacity:0.1,
        shadowOffset:{width:0,height:2},
        shadowRadius:4
    }
})

export {Card}