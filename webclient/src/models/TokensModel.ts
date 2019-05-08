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
}

export default TokensModel
