import React, {FunctionComponent} from 'react'
import {Alert, Button, Col, Form, Row} from 'react-bootstrap'
import {RouteComponentProps} from 'react-router-dom'

interface IRegistrationTemplate extends RouteComponentProps {
    onChange: (name: string, value: string) => void,
    onSubmit: (e: any) => void,
    formError: boolean
}

const RegistrationTemplate: FunctionComponent<IRegistrationTemplate> = ({onChange, onSubmit, formError, history}) =>
    <Row className='h-100vh align-content-center'>
        <Col md={{span: 4, offset: 4}}>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Login</Form.Label>
                    <Form.Control
                        onChange={(e: any) =>
                            onChange(e.currentTarget.name, e.currentTarget.value)}
                        name='login'
                        type='login'
                        placeholder='login'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e: any) =>
                            onChange(e.currentTarget.name, e.currentTarget.value)}
                        name='password'
                        type='password'
                        placeholder='password'/>
                </Form.Group>
                {formError && (
                    <Alert variant='danger'>
                        Не правильный логи или пароль, повторите попытку
                    </Alert>
                )}
                <Button className='ml-2' type='button' onClick={() => history.push('/registration')}>
                    Регистрация
                </Button>
            </Form>
        </Col>
    </Row>

export default RegistrationTemplate
