import axios from 'axios'
import TokenModel from "../models/TokenModel";

function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

class Tokens {
    tokens = {
        accessToken: '',
        refreshToken: ''
    }

    takeTokens({accessToken, refreshToken}) {
        console.log(refreshToken)
        this.tokens.accessToken = accessToken
        this.tokens.refreshToken = refreshToken
        return this
    }

    register() {
        const defaultHeaders = {
            Authorization: `Bearer ${this.tokens.accessToken}`,
            'X-Requested-With': 'XMLHttpRequest',
            Accept: 'application/json'
        }

        axios.defaults.headers.common = {...defaultHeaders}

        axios.interceptors.response.use(
            response => response,
            (error) => {
                if (error.response && error.response.status === 401) {
                    window.location.reload()
                }
                return Promise.reject(error)
            }
        )

        document.cookie = `refreshToken=${this.tokens.refreshToken}`
    }

    extractRefreshToken() {
        this.tokens.refreshToken = getCookie("refreshToken")

        return this
    }

    async getAccessToken() {
        const tokens = await TokenModel.getAccessToken(this.tokens.refreshToken)
        this.takeTokens(tokens)

        return true
    }
}

export default Tokens
