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

interface IAppProps {
    loginStore?: IMLogin,
    mangaListStore?: IMMangaList
}

interface IAppState {
    isModalOpen: boolean,
    isMenuOpen: boolean
}

@inject((allStores: any) => ({
    loginStore: allStores.loginStore as IMLogin,
    mangaListStore: allStores.mangaListStore as IMMangaList,
}))
@observer
class App extends Component<IAppProps, IAppState> {
    public state = {
        isModalOpen: false,
        isMenuOpen: false
    }

    public async componentDidMount(): Promise<void> {
        // @ts-ignore
        document.addEventListener('keydown', (e) => {
            e = e || window.event
            if (e.altKey && e.code === 'KeyK') {
                this.onModalOpen()
            }
            return
        })
        try {
            const [isToken, refreshToken] = TokenService.containsToken()
            if (isToken) {
                const tokens = await TokensModel.refreshToken({refreshToken})
                TokenService.writeToken(tokens)
                this.props.loginStore!.isLogin = true
            }
        } catch (e) {

        }

    }

    public onModalOpen = () => {
        this.setState({...this.state, isModalOpen: !this.state.isModalOpen}, () => {
            // @ts-ignore
            document.getElementById('search_input').focus()
        })

    }

    public onMenuOpen = () => this.setState({...this.state, isMenuOpen: !this.state.isMenuOpen})

    public render() {
        const {isModalOpen, isMenuOpen} = this.state
        const {mangaListStore, loginStore} = this.props
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
                        <Form className='d-flex' onSubmit={(e: any) => {
                            e.preventDefault()
                            mangaListStore!.offset = 0
                            mangaListStore!.onMangaListFetch()
                            this.setState({isModalOpen: false, isMenuOpen: false})
                        }}>
                            <FormControl
                                id='search_input'
                                onChange={(e: any) => mangaListStore!.searchManga = e.target.value}
                                type='text'
                                placeholder='Search'
                                value={mangaListStore!.searchManga}/>
                            <Link to='/manga'>
                                <Button className='ml-2'
                                        variant='outline-primary'
                                        onClick={() => {
                                            mangaListStore!.offset = 0
                                            mangaListStore!.onMangaListFetch()
                                            this.setState({isModalOpen: false, isMenuOpen: false})
                                        }}>
                                    Search
                                </Button>
                            </Link>
                        </Form>
                    </Modal.Body>
                </Modal>
                <Navbar collapseOnSelect expand='sm' bg='light' variant='light' expanded={isMenuOpen}
                        onToggle={() => this.onMenuOpen()}>
                    <Navbar.Brand>Otaku-Shelter</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link>
                                <Link onClick={() => {
                                    mangaListStore!.searchManga = ''
                                    mangaListStore!.onMangaListFetch()
                                    this.onMenuOpen()
                                }} to='/manga'>
                                    Manga
                                </Link>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {loginStore!.isLogin
                                ? (
                                    <Nav.Link>
                                        <Link onClick={() => this.onMenuOpen()} to='/profile'>
                                            Profile
                                        </Link>
                                    </Nav.Link>
                                )
                                : (
                                    <Fragment>
                                        <Nav.Link>
                                            <Link onClick={() => this.onMenuOpen()} to='/Login'>
                                                Вход
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link onClick={() => this.onMenuOpen()} to='/registration'>
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
