import React, {Fragment} from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import _debounce from 'lodash/debounce';
import ModalMangaSearch from "./componens/modalSearch";
import pages from './configs/pagesConfig'
import './configs/tokenConfig'
import './App.scss'
import {connect} from "react-redux";
import Tokens from "./configs/tokenConfig";
import Login from "./pages/login";
import MangaModel from "./models/MangaModel";

class App extends React.Component {
    state = {
        isActive: false,
        isSearch: false
    }

    KeyPress = (e) => {
        const {isActive} = this.state
        const evtobj = window.event ? window.event : e
        if (evtobj.keyCode === 75 && evtobj.altKey) this.setState({isActive: !isActive});
        if (evtobj.which === 27 && isActive !== false) this.setState({isActive: false})
    }

    onCloseModal = () => this.setState({isActive: false})

    onSearchSubmit = async (e, value) => {
        if (e.keyCode === 13) {
            try {
                const response = await MangaModel.getMangas({title: value})
                this.props.onSearchSubmit(response)
                this.onCloseModal()
                this.setState({isSearch: true}, () => {
                    this.setState({isSearch: false})
                })
            } catch (e) {

            }
        }
    }

    onChangeSearch = _debounce(async (value) => {
        try {
            const response = await MangaModel.getMangas({title: value})
        } catch (e) {

        }
    }, 200);

    render() {
        document.onkeydown = this.KeyPress
        const {isActive, isSearch} = this.state
        return (
            <Fragment>
                {new Tokens().extractRefreshToken() === false ? <Login/> : (
                    <Fragment>
                        <Router>
                            <Switch>
                                {isSearch && <Redirect to="/manga"/>}
                                {pages.map((page) =>
                                    <Route
                                        key={page.name}
                                        exact
                                        path={page.route}
                                        render={(props) => page.render(props)}
                                    />
                                )}
                                <Redirect from="/" to="/manga"/>
                            </Switch>
                        </Router>
                        {isActive && <ModalMangaSearch isActive={isActive} onCloseModal={this.onCloseModal}
                                                       onChangeSearch={this.onChangeSearch}
                                                       onSearchSubmit={this.onSearchSubmit}/>}
                    </Fragment>
                )}
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSearchSubmit: value => dispatch({type: 'SET_SEARCH_MANGAS', value}),
})

export default connect(() => {
}, mapDispatchToProps)(App)

