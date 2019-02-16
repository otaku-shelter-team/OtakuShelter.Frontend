import axios from 'axios'

class AccountModel {
	static login = (username, password) => axios.post('/accounts', {username, password})
		.then(({data}) => data)
		.catch((error) => error.response.data)

	static getTokens = (username, password) => axios.post('/tokens', {username, password})
		.then(({data}) => data)
		.catch((error) => error.response.data)
}

export default AccountModel