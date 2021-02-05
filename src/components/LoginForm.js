import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Button, Card, CardSection, Field, Spinner } from './common'

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onButtonPress() {
        const { email, password } = this.props
        this.props.loginUser({ email, password })
    }

    renderError() {
        if (this.props.error) {
            return <View>
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
            </View>
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size='small' />
        }

        return <Button title="Log In" onPress={this.onButtonPress.bind(this)} />

    }

    render() {
        return <Card>

            <CardSection>
                <Field
                    value={this.props.email}
                    label="Email"
                    placeholder="email@gmail.com"
                    onChangeText={this.onEmailChange.bind(this)}
                />
            </CardSection>

            <CardSection>
                <Field
                    secureTextEntry
                    label="Password"
                    placeholder="Password"
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                />
            </CardSection>

            {this.renderError()}

            <CardSection>
                {this.renderButton()}
            </CardSection>

        </Card>
    }
}

const mapsStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth
    return { email, password, error, loading }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
})

export default connect(mapsStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)