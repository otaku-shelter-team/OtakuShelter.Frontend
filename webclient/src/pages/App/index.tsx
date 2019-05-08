import 'bootstrap/scss/bootstrap.scss'
import React, {Component} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Login from '../Login'
import Registration from '../Registration'

class App extends Component {
    public render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <BrowserRouter>
                            <Switch>
                                <Route render={(props) => <Login {...props}/>} exact={true} path='/login'/>
                                <Route render={(props) => <Registration {...props}/>} exact={true}
                                       path='/registration'/>
                                <Redirect to='/login'/>
                            </Switch>
                        </BrowserRouter>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App
