import React from 'react'
import LoginTemplate from './LoginTemplate'
import AccountModel from '../../models/AccountModel'
import TokenModel from '../../models/TokenModel'

class Login extends React.Component {
	state = {
		formData: {
			username: '',
			password: ''
		},
		formErrors: {}
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
		// await AccountModel.login(username, password)
		const tokens = await TokenModel.getUserTokens(username, password)
		console.log(tokens)
		// TODO: save tokens in Cookies
	}

	render() {
		const {formData, formErrors} = this.state
		return <LoginTemplate formData={formData} formErrors={formErrors} onChange={this.onChange}
		                      onSubmit={this.onSubmit}/>
	}
}

export default Login