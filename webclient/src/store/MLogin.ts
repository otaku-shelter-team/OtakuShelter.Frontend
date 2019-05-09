import {observable} from 'mobx'

class MLogin implements IMLogin {
    @observable public isLogin = false
}

export interface IMLogin {
    isLogin: boolean,
}

export default new MLogin()
