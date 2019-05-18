import React, {Component} from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import {RouteComponentProps} from 'react-router'
import TokenService from '../../../services/TokenService'

interface IProfileProps extends RouteComponentProps {
    lol: number
}

class Profile extends Component<IProfileProps, {}> {
    public onExit = () => {
        TokenService.deleteToken()
        window.location.reload()
    }

    public render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Button variant='outline-danger' onClick={() => this.onExit()}>Выйти</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Profile
