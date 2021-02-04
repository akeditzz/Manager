import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'

const Field = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return <View style={styles.viewStyle}>
        <Text style={styles.labelStyle}>{label}</Text>
        <TextInput
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            style={styles.textInputStyle}
            autoCorrect={false}
            placeholder={placeholder}
        />
    </View>
}

const styles = StyleSheet.create({
    textInputStyle: {
        height: 40,
        width: 0,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 8,
        flex: 1,
        flexDirection: 'row',
        color: '#000',
        padding: 8,
        fontSize: 18,
        lineHeight: 23
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        margin: 8,
        fontSize: 18
    }
})

export { Field }