import React from 'react'
import { TouchableOpacity, Text, StyleSheet} from 'react-native'

const Button = ({onPress, title}) => {
    return <TouchableOpacity style={style.buttonStyle}
        onPress={onPress}>
        <Text style={style.textStyle}>
            {title}
        </Text>
    </TouchableOpacity>
}

const style = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#001242',
        borderRadius: 25,
        flex: 1,
        margin: 8,
        height: 40,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export {Button}