import axios from 'axios'

class TokenModel {
    static getTokens = () => axios.get("http://accounts.staging.otaku-shelter.ru/tokens")
        .then(({data}) => data.tokens)
        .catch((error) => error.response.data)

    static getUserTokens = (username, password) => axios.post('http://accounts.staging.otaku-shelter.ru/tokens', {username, password})
        .then(({data}) => data)
        .catch((error) => error.response.data)

    static getAccessToken = (refreshToken) => axios.put('http://accounts.staging.otaku-shelter.ru/tokens', {refreshToken}, {
        headers: {

            Authorization: `Bearer ${refreshToken}`,
        }
    })
        .then(({data}) => data)
        .catch((error) => error.response.data)
}

export default TokenModel
