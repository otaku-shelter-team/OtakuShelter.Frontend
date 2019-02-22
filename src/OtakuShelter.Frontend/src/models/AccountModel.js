import axios from 'axios'

class AccountModel {
	static login = (username, password) => axios.post('/accounts', {username, password})
		.then(({data}) => data)
		.catch((error) => error.response.data)

	static getAccounts = () => axios.get('/admin/accounts')
		.then(({data}) => data.accounts)
		.catch((error) => error.response.data)
}

export default AccountModel