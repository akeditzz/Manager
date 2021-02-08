import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    LayoutAnimation,
    TouchableWithoutFeedback,
    UIManager
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { CardSection } from './common'
class ListItem extends Component {
    componentDidMount() {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    componentDidUpdate() {
        LayoutAnimation.spring()
    }

    openEmployeeCreate() {
        Actions.employeeCreate({ employee: this.props.employees.item })
    }

    render() {
        const { titleStyle } = styles
        const { name } = this.props.employees.item
        return <TouchableWithoutFeedback
            onPress={this.openEmployeeCreate.bind(this)}>
            <View>
                <CardSection>
                    <Text style={titleStyle}>
                        {name}
                    </Text>
                </CardSection>
            </View>
        </TouchableWithoutFeedback>
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        color: '#000',
        fontSize: 16,
        paddingLeft: 8
    }
})

export default ListItem