import {inject, observer} from 'mobx-react'
import React, {Component} from 'react'
import {Spinner} from 'react-bootstrap'
import {RouteComponentProps} from 'react-router'
import {ITokens} from '../../../interfaces'
import TokensModel from '../../models/TokensModel'
import TokenService from '../../Services/TokenService'
import {IMLogin} from '../../store/MLogin'
import LoginTemplate from './LoginTemplate'

interface ILoginProps extends RouteComponentProps {
    loginStore?: IMLogin
}

interface ILoginState {
    formData: {
        login: string,
        password: string,
    },
    formError: string[],
    isLoading: boolean
}

@inject((allStores: any) => ({
    loginStore: allStores.loginStore as IMLogin
}))
@observer
class Login extends Component<ILoginProps, ILoginState> {

    public state = {
        formData: {
            login: '',
            password: '',
        },
        formError: [],
        isLoading: false,
    }

    public onSubmit = (e: any) => {
        e.preventDefault()
        const {formData: {login, password}} = this.state

        this.setState({...this.state, isLoading: true}, async () => {
            try {
                const response = await TokensModel.createToken({password, username: login})
                if (response === 'FAILED') {
                    this.setState({
                        ...this.state,
                        isLoading: false,
                        formError: ['Неправильный логи или пароль']
                    })

                } else {
                    TokenService.writeToken(response as ITokens)
                    this!.props!.loginStore!.isLogin = true
                    this!.props!.history.push('/manga')
                }
            } catch (e) {

            }
        })

    }

    public onChange = (name: string, value: string) => {
        this.setState({
            formData: {...this.state.formData, [name]: value},
        })
    }

    public render() {
        const {isLoading, formError} = this.state
        return isLoading
            ? (<Spinner animation='grow' variant='primary'/>)
            : (<LoginTemplate {...this.props} onSubmit={this.onSubmit} onChange={this.onChange} formError={formError}/>)
    }

}

export default Login
