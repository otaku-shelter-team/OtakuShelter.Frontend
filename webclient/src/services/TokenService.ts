import axios from 'axios'
import {ITokens} from '../../interfaces'

function getCookie(name: string) {
    const matches = document.cookie.match(new RegExp(
        '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

class TokenService {
    public static tokens: ITokens = {
        accessToken: '',
        refreshToken: ''
    }

    public static writeToken(response: ITokens) {
        TokenService.tokens.accessToken = response.accessToken
        TokenService.tokens.refreshToken = response.refreshToken
        document.cookie = `refreshToken=${this.tokens.refreshToken}; path=/;`
        const defaultHeaders = {
            'Authorization': `Bearer ${response.accessToken}`,
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json'
        }

        axios.defaults.headers.common = {...defaultHeaders}
    }

    public static containsToken(): [boolean, string] {
        const refreshToken = getCookie('refreshToken')
        return [!(refreshToken === undefined || refreshToken === 'undefined'), refreshToken!]
    }
}

export default TokenService
