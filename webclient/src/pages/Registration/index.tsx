import React, {Component} from 'react'
import {Spinner} from 'react-bootstrap'
import {RouteComponentProps} from 'react-router'
import {ITokens} from '../../../interfaces'
import AccountsModel from '../../models/AccountsModel'
import TokensModel from '../../models/TokensModel'
import TokenService from '../../Services/TokenService'
import RegistrationTemplate from './RegistrationTemplate'

interface ILoginState {
    formData: {
        login: string,
        password: string,
        email: string,
        confirmPassword: string
    },
    formError: string[],
    isLoading: boolean
}

class Registration extends Component<RouteComponentProps, ILoginState> {
    public state = {
        formData: {
            login: '',
            password: '',
            email: '',
            confirmPassword: ''
        },
        formError: [],
        isLoading: false,
    }

    public onChange = (name: string, value: string) => {
        this.setState({
            formData: {...this.state.formData, [name]: value},
        })
    }

    public onSubmit = (e: any) => {
        e.preventDefault()
        const {formData: {login, password, confirmPassword, email}} = this.state
        if (password !== confirmPassword) {
            this.setState({
                ...this.state,
                formError: ['Пароли не совпадают']
            })
            return null
        }
        this.setState({...this.state, isLoading: true}, async () => {
            try {
                await AccountsModel.createAccount({password, username: login, email})
                const response = await TokensModel.createToken({password, username: login})
                if (response === 'FAILED') {
                    this.setState({...this.state, isLoading: false, formError: []})
                } else {
                    TokenService.writeToken(response as ITokens)
                    this.setState({...this.state, isLoading: false, formError: []})
                }
            } catch (e) {

            }
        })

    }

    public render() {
        const {isLoading, formError} = this.state
        return isLoading
            ? <Spinner animation='grow' variant='primary'/>
            : (<RegistrationTemplate
                {...this.props}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                formError={formError}
            />)
    }
}

export default Registration
