import axios from 'axios'
import {ITokens, IUserData} from '../../interfaces'

class TokensModel {
    public static createToken = async (query: IUserData): Promise<ITokens | string> => {
        try {
            const {data} = await axios.post('/tokens', query)
            return data
        } catch (e) {
            return 'FAILED'
        }
    }

    public static refreshToken = async (query: { refreshToken: string }): Promise<ITokens> => {
        try {
            const {data} = await axios.put('/tokens', query)
            return data
        } catch (e) {
            return {
                accessToken: '',
                refreshToken: ''
            }
        }
    }
}

export default TokensModel
