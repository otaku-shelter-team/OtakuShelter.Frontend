import axios from 'axios'

class TokenModel {
    static getTokens = () => axios.get("/tokens")
        .then(({data}) => data.tokens)
        .catch((error) => error.response.data)

    static getUserTokens = (username, password) => axios.post('/tokens', {username, password})
        .then(({data}) => data)
        .catch((error) => error.response.data)

    static getAccessToken = (refreshToken) => axios.put('/tokens', {refreshToken}, {
        headers: {

            Authorization: `Bearer ${refreshToken}`,
        }
    })
        .then(({data}) => data)
        .catch((error) => error.response.data)
}

export default TokenModel
