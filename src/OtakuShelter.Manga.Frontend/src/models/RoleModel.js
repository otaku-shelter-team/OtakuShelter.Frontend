import axios from 'axios'

class RoleModel {
	static getRoles = () => axios.get('/roles')
		.then(({data}) => data.roles)
		.catch((error) => error.response.data)
}

export default RoleModel