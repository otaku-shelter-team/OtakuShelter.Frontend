import axios from 'axios'

class ProfileModel {
    static getProfiles = () => axios.get('/admin/profiles')
        .then(({data}) => data.profiles)
        .catch((error) => error.response.data)
}

export default ProfileModel
