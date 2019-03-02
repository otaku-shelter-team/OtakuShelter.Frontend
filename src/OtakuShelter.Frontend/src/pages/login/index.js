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
        isLoaded: false
    }

    async componentDidMount() {
        const {history} = this.props;

        const status = new Tokens().extractRefreshToken()

        if (status === false) {
            this.setState({
                isLoaded: true
            })
            return
        }

        const token = status.getAccessToken();

        if (await token) {
            history.push("/account")
        }
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
        const {history} = this.props
        this.setState({
            isLoaded: false
        }, async () => {
            const tokens = await TokenModel.getUserTokens(username, password)
            const register = new Tokens()
                .takeTokens(tokens)
                .register()

            history.push('profile')
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
