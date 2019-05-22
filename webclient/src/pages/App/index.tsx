import {inject, observer} from 'mobx-react'
import React, {Component, Fragment} from 'react'
import {Button, Form, FormControl, Image, Modal, Nav, Navbar} from 'react-bootstrap'
import {BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom'
import TokensModel from '../../models/TokensModel'
import TokenService from '../../services/TokenService'
import {IMLogin} from '../../store/MLogin'
import {IMMangaList} from '../../store/MMangaList'
import Login from '../Login'
import Registration from '../Registration'
import Manga from '../User/Manga'
import MangaList from '../User/MangaList'
import Profile from '../User/Profile'
import Reader from '../User/Reader'

interface IApp {
    isModalOpen?: boolean,
    loginStore?: IMLogin,
    mangaListStore?: IMMangaList
}

@inject((allStores: any) => ({
    loginStore: allStores.loginStore as IMLogin,
    mangaListStore: allStores.mangaListStore as IMMangaList,
}))
@observer
class App extends Component<IApp, {}> {
    public state = {
        isModalOpen: false
    }

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

    public onModalOpen = () => this.setState({...this.state, isModalOpen: !this.state.isModalOpen})

    public render() {
        const {isModalOpen} = this.state
        const {mangaListStore} = this.props
        return (
            <BrowserRouter>
                <Modal
                    size='lg'
                    show={isModalOpen}
                    onHide={() => this.onModalOpen()}
                    aria-labelledby='example-modal-sizes-title-lg'
                >
                    <Modal.Header closeButton>
                        <Modal.Title id='example-modal-sizes-title-lg'>
                            Поиск
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form inline>
                            <FormControl
                                onChange={(e: any) => mangaListStore!.searchManga = e.target.value}
                                type='text'
                                placeholder='Search' className='mr-sm-2'
                                value={this!.props!.mangaListStore!.searchManga}/>
                            <Button variant='outline-primary'
                                    onClick={() => {
                                        this!.props!.mangaListStore!.onMangaListFetch('start')
                                        this.setState({isModalOpen: false})
                                    }}>Search</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
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
                        </Nav>
                        <Nav>
                            {this!.props!.loginStore!.isLogin
                                ? (
                                    <Link to='/profile'>
                                        <Image
                                            width={40}
                                            height={40}
                                            src='https://cdn4.iconfinder.com/data/icons/one-piece-anime/48/Sed-33-512.png'
                                            roundedCircle/>
                                    </Link>
                                )
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
                            <Button variant='outline-primary' onClick={() => this.onModalOpen()}>
                                <Image width={20}
                                       height={20}
                                       src='https://static.thenounproject.com/png/105498-200.png'
                                       rounded/>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route render={(props) => <Login {...props} />} exact={true} path='/login'/>
                    <Route render={(props) => <Registration {...props} />} exact={true}
                           path='/registration'/>
                    <Route render={(props) => <MangaList {...props} />} exact={true}
                           path='/manga'/>
                    <Route render={(props) => <Manga {...props} />} exact={true}
                           path='/manga/:id'/>
                    {TokenService.containsToken()[0] && (
                        <Route render={(props) => <Profile {...props} />} exact={true}
                               path='/profile'/>
                    )}
                    <Route render={(props) => <Reader {...props} />} exact={true}
                           path='/manga/:mangaId/chapter/:chapterId'/>
                    <Redirect to='/manga'/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
