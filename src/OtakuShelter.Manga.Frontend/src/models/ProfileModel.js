import axios from 'axios'

class ProfileModel {
	static getProfiles = () => axios.get('/admin/profiles')
		.then(({data: {profiles}}) => {

			console.log(profiles);

			return profiles;
		})
		.catch((error) => error.response.data)
}

export default ProfileModel