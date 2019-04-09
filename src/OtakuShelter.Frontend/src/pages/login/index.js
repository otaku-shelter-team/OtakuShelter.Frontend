import React from 'react'
import LoginTemplate from './LoginTemplate'
import TokenModel from '../../models/TokenModel'
import Tokens from "../../configs/tokenConfig";
import Loader from "../../componens/loader";

class Login extends React.Component {
    state = {
        formData: {
            username: '',
            password: ''
        },
        formErrors: {},
        isLoaded: true
    }

    onChange = (name, value) => {
        this.setState({
            formData: {
                ...this.state.formData, [name]: value
            }
        })
    }

    onSubmit = () => {
        const {username, password} = this.state.formData
        this.setState({
            isLoaded: false
        }, async () => {
            const tokens = await TokenModel.getUserTokens(username, password)
            new Tokens()
                .takeTokens(tokens)
                .register()
            document.location.reload(true)
        })
    }

    render() {
        const {formData, formErrors, isLoaded} = this.state
        return isLoaded
            ? <LoginTemplate formData={formData} formErrors={formErrors} onChange={this.onChange}
                             onSubmit={this.onSubmit}/>
            : <Loader/>
    }
}

export default Login
