import _ from 'lodash'
import React, { Component } from 'react'
import Communications from 'react-native-communications'
import { Text, StyleSheet, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate, employeeFirebaseUpdate, employeeFormReset, employeeFire } from '../actions'
import { Card, CardSection, Button, Field, Confirm } from './common'

class EmployeeCreate extends Component {

    state = { showModal: false }

    componentDidMount() {

        if (this.props.employee) {
            _.each(this.props.employee, (value, prop) => {
                this.props.employeeUpdate({ prop, value })
            })

        } else {
            this.props.employeeFormReset()
        }
    }

    onButtonPress() {
        const { name, phone, shift } = this.props
        if (this.props.employee) {
            this.props.employeeFirebaseUpdate({ name, phone, shift, uid: this.props.employee.uid })
        } else {
            this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
        }

    }

    onTextPress() {
        const { phone, shift } = this.props
        Communications.textWithoutEncoding(phone, `Your upcoming shift is on ${shift}`)
    }

    onAccept() {
        const {uid} = this.props.employee
        this.onDecline()
        this.props.employeeFire({uid})
    }

    onDecline() {
        this.setState({ showModal: false })
    }

    renderExtraButtons() {
        if (this.props.employee) {
            return <View>
                <CardSection>
                    <Button title="Text Schedule" onPress={this.onTextPress.bind(this)} />
                </CardSection>

                <CardSection>
                    <Button title="Fire" onPress={() => { this.setState({ showModal: !this.state.showModal }) }} />
                </CardSection>
            </View>
        }
    }

    render() {
        return <Card>
            <CardSection>
                <Field
                    value={this.props.name}
                    label="Name"
                    placeholder="Employee Name"
                    onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })} />
            </CardSection>

            <CardSection>
                <Field
                    value={this.props.phone}
                    label="Phone"
                    placeholder="Employee Phone"
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
                <Button title="Save" onPress={this.onButtonPress.bind(this)} />
            </CardSection>

            {this.renderExtraButtons()}

            <Confirm visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}>
                Are you sure you want to Fire them?
            </Confirm>

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

export default connect(mapsStateToProps, { employeeUpdate, employeeCreate, employeeFirebaseUpdate, employeeFormReset, employeeFire })(EmployeeCreate)