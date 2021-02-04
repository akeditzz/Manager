import React from 'react'
import {View, StyleSheet} from 'react-native'

const CardSection = (props) =>{
    return <View style={styles.cardSection}>
        {props.children}
    </View>
}

const styles = StyleSheet.create({
    cardSection:{
        borderBottomWidth:1,
        padding:8,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    }
})

export {CardSection}