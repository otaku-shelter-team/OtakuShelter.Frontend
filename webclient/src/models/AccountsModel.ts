import axios from 'axios'
import {IUserData} from '../../interfaces'

class AccountsModel {
    public static updateAccount = async (query: IUserData) => {
        try {
            const {status} = await axios.put('/accounts', query)
            if (status === 200) {
                return 'OK'
            }
            return 'FAILED'
        } catch (e) {

        }
    }
}

export default AccountsModel
