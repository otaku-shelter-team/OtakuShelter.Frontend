import React from 'react'
import LoginTemplate from './LoginTemplate'
import TokenModel from '../../models/TokenModel'
import Tokens from "../../configs/tokenConfig";

class Login extends React.Component {
    state = {
        formData: {
            username: '',
            password: ''
        },
        formErrors: {}
    }

    componentDidMount() {
        const {history} = this.props;

        const status = new Tokens()
            .extractRefreshToken()
            .getAccessToken()

        if (status) {
            history.push("account")
        }
    }

    onChange = (name, value) => {
        this.setState({
            formData: {
                ...this.state.formData, [name]: value
            }
        })
    }

    onSubmit = async () => {
        const {username, password} = this.state.formData
        const {history} = this.props
        const tokens = await TokenModel.getUserTokens(username, password)
        const register = new Tokens()
            .takeTokens(tokens)
            .register()

        history.push('profile')
    }

    render() {
        const {formData, formErrors} = this.state
        return <LoginTemplate formData={formData} formErrors={formErrors} onChange={this.onChange}
                              onSubmit={this.onSubmit}/>
    }
}

export default Login
