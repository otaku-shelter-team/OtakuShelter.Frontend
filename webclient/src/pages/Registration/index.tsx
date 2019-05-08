import React, {Component} from 'react'
import {Spinner} from 'react-bootstrap'
import {RouteComponentProps} from 'react-router'
import {ITokens} from '../../../interfaces'
import TokensModel from '../../models/TokensModel'
import TokenService from '../../Services/TokenService'
import RegistrationTemplate from './RegistrationTemplate'

interface ILoginState {
    formData: {
        login: string,
        password: string,
    },
    formError: boolean,
    isLoading: boolean
}

class Registration extends Component<RouteComponentProps, ILoginState> {
    public state = {
        formData: {
            login: '',
            password: '',
        },
        formError: false,
        isLoading: false,
    }

    public onChange = (name: string, value: string) => {
        this.setState({
            formData: {...this.state.formData, [name]: value},
        })
    }

    public onSubmit = (e: any) => {
        e.preventDefault()
        const {formData: {login, password}} = this.state
        this.setState({...this.state, isLoading: true}, async () => {
            try {
                const response = await TokensModel.createToken({password, username: login})
                if (response === 'FAILED') {
                    this.setState({...this.state, isLoading: false, formError: true})
                } else {
                    TokenService.writeToken(response as ITokens)
                    this.setState({...this.state, isLoading: false, formError: false})
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
