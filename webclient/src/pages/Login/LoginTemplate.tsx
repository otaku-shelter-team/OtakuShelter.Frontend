import React, {FunctionComponent} from 'react'
import {Alert, Button, Col, Container, Form, Row} from 'react-bootstrap'
import {RouteComponentProps} from 'react-router-dom'

interface ILoginTemplate extends RouteComponentProps {
    onChange: (name: string, value: string) => void,
    onSubmit: (e: any) => void,
    formError: string[]
}

const LoginTemplate: FunctionComponent<ILoginTemplate> = ({onChange, onSubmit, formError, history}) =>
    <Container className='h-100'>
        <Row className='h-100 align-content-center justify-content-center'>
            <Col md={4}>
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
                </Form>
            </Col>
        </Row>
    </Container>

export default LoginTemplate
