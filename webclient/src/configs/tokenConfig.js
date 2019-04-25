import axios from 'axios'
import TokenModel from "../models/TokenModel";

function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
        // eslint-disable-next-line
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

        document.cookie = `refreshToken=${this.tokens.refreshToken}; path=/;`
    }

    extractRefreshToken() {
        this.tokens.refreshToken = getCookie("refreshToken")
        if (this.tokens.refreshToken === "undefined" || this.tokens.refreshToken === undefined)
            return false
        else
            return this
    }

    async getAccessToken() {
        const tokens = await TokenModel.getAccessToken(this.tokens.refreshToken)
        await this.takeTokens(tokens)
        await this.register()


        return !!tokens
    }
}

export default Tokens
