import axios from 'axios'

class TokenModel {
	static getUserTokens = (username, password) => axios.post('/tokens', {username, password})
		.then(({data}) => data)
		.catch((error) => error.response.data)
}

export default TokenModel