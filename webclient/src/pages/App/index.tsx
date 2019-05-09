import 'bootstrap/scss/bootstrap.scss'
import {inject, observer} from 'mobx-react'
import React, {Component, Fragment} from 'react'
import {Image, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom'
import TokensModel from '../../models/TokensModel'
import TokenService from '../../Services/TokenService'
import {IMLogin} from '../../store/MLogin'
import Login from '../Login/index'
import Registration from '../Registration'
import MangaList from '../User/MangaList'

@inject((allStores: any) => ({
    loginStore: allStores.loginStore as IMLogin
}))
@observer
class App extends Component<{ loginStore?: IMLogin }, {}> {

    public async componentDidMount(): Promise<void> {
        try {
            const [isToken, refreshToken] = TokenService.containsToken()
            if (isToken) {
                const tokens = await TokensModel.refreshToken({refreshToken})
                TokenService.writeToken(tokens)
                this!.props!.loginStore!.isLogin = true
            }
        } catch (e) {

        }

    }

    public render() {
        return (
            <BrowserRouter>
                <Navbar collapseOnSelect expand='sm' bg='light' variant='light'>
                    <Navbar.Brand>Otaku-Shelter</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link>
                                <Link to='/manga'>
                                    Manga
                                </Link>
                            </Nav.Link>
                            <Nav.Link href='#pricing'>Pricing</Nav.Link>
                            <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                                <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
                                <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {this!.props!.loginStore!.isLogin
                                ? (<Image
                                    width={40}
                                    height={40}
                                    src='https://cdn4.iconfinder.com/data/icons/one-piece-anime/48/Sed-33-512.png'
                                    roundedCircle/>)
                                : (
                                    <Fragment>
                                        <Nav.Link>
                                            <Link to='/Login'>
                                                Вход
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to='/registration'>
                                                Регистрация
                                            </Link>
                                        </Nav.Link>
                                    </Fragment>
                                )
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route render={(props) => <Login {...props}/>} exact={true} path='/login'/>
                    <Route render={(props) => <Registration {...props}/>} exact={true}
                           path='/registration'/>
                    <Route render={(props) => <MangaList {...props}/>} exact={true}
                           path='/manga'/>
                    <Redirect to='/manga'/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
