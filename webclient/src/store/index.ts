import loginStore, {IMLogin} from './MLogin'

class Store implements IStore {
    public loginStore = loginStore
}

export interface IStore {
    loginStore: IMLogin
}

export default new Store()
