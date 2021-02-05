import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'
import { Card, CardSection, Button, Field } from './common'

class EmployeeCreate extends Component {
    render() {
        return <Card>
            <CardSection>
                <Field
                    value={this.props.name}
                    label="Name"
                    placeholder="Akshay"
                    onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })} />
            </CardSection>

            <CardSection>
                <Field
                    value={this.props.phone}
                    label="Phone"
                    placeholder="0998765434"
                    onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })} />
            </CardSection>

            <CardSection>
                <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center' }}>
                    <Text style={style.pickerLabelStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        style={{ flex: 1 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.props.employeeUpdate({ prop: 'shift', value: itemValue })
                        }>
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </View>
            </CardSection>

            <CardSection>
                <Button title="Create" />
            </CardSection>

        </Card>
    }
}

const mapsStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm
    return { name, phone, shift }
}

const style = StyleSheet.create({
    pickerLabelStyle: {
        fontSize: 18,
        margin: 8
    }
})

export default connect(mapsStateToProps, { employeeUpdate })(EmployeeCreate)