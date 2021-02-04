import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged } from '../actions'
import { Button, Card, CardSection, Field } from './common'

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
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

            <CardSection>
                <Button
                    title="Login"
                />
            </CardSection>

        </Card>
    }
}

const mapsStateToProps = state => {
    return {
        email: state.auth.email,
        password:state.auth.password
    }
}

export default connect(mapsStateToProps, { emailChanged,passwordChanged })(LoginForm)