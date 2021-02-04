import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const Spinner = ({ size }) => {
    return <View style={style.spinnerStyle}>
        <ActivityIndicator size={size || 'large'} animating={true} color="#00ffff"/>
    </View>
}

const style = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    }
})

export { Spinner }