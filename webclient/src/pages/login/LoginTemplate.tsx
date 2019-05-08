import React, {FunctionComponent} from 'react'
import {Alert, Button, Col, Form, Row} from 'react-bootstrap'
import {RouteComponentProps} from 'react-router-dom'

interface ILoginTemplate extends RouteComponentProps {
    onChange: (name: string, value: string) => void,
    onSubmit: (e: any) => void,
    formError: string[]
}

const LoginTemplate: FunctionComponent<ILoginTemplate> = ({onChange, onSubmit, formError, history}) =>
    <Row className='h-100vh align-content-center'>
        <Col md={{span: 4, offset: 4}}>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Login</Form.Label>
                    <Form.Control
                        required
                        onChange={(e: any) =>
                            onChange(e.currentTarget.name, e.currentTarget.value)}
                        name='login'
                        type='login'
                        placeholder='login'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        onChange={(e: any) =>
                            onChange(e.currentTarget.name, e.currentTarget.value)}
                        name='password'
                        type='password'
                        placeholder='password'/>
                </Form.Group>
                {formError.length > 0 && formError.map((error) =>
                    <Alert variant='danger'>
                        {error}
                    </Alert>
                )}
                <Button type='submit'>Войти</Button>
                <Button className='ml-2' type='button' onClick={() => history.push('/registration')}>
                    Регистрация
                </Button>
            </Form>
        </Col>
    </Row>

export default LoginTemplate
