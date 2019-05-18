import React, {FunctionComponent} from 'react'
import {Alert, Button, Col, Container, Form, Row} from 'react-bootstrap'
import {RouteComponentProps} from 'react-router-dom'

interface IRegistrationTemplate extends RouteComponentProps {
    onChange: (name: string, value: string) => void,
    onSubmit: (e: any) => void,
    formError: string[]
}

const RegistrationTemplate: FunctionComponent<IRegistrationTemplate> = ({onChange, onSubmit, formError, history}) =>
    <Container className='h-100'>
        <Row className='h-100 align-content-center'>
            <Col md={{span: 4, offset: 4}}>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Логин</Form.Label>
                        <Form.Control
                            required
                            onChange={(e: any) =>
                                onChange(e.currentTarget.name, e.currentTarget.value)}
                            name='login'
                            type='login'
                            placeholder='login'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            required
                            onChange={(e: any) =>
                                onChange(e.currentTarget.name, e.currentTarget.value)}
                            name='password'
                            type='password'
                            placeholder='password'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Подтверждение пароля</Form.Label>
                        <Form.Control
                            required
                            onChange={(e: any) =>
                                onChange(e.currentTarget.name, e.currentTarget.value)}
                            name='confirmPassword'
                            type='password'
                            placeholder='password'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            required
                            onChange={(e: any) =>
                                onChange(e.currentTarget.name, e.currentTarget.value)}
                            name='email'
                            type='email'
                            placeholder='email'/>
                    </Form.Group>
                    {formError.length > 0 && formError.map((error) =>
                        <Alert variant='danger'>
                            {error}
                        </Alert>
                    )}
                    <Button type='submit' onClick={() => history.push('/manga')}>
                        Регистрация
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>

export default RegistrationTemplate
