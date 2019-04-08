import React, {Fragment} from 'react'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import ModalMangaSearch from "./componens/modalSearch";
import pages from './configs/pagesConfig'
import './configs/tokenConfig'
import './App.scss'
import {connect} from "react-redux";

class App extends React.Component {
    state = {
        isActive: false,
    }

    KeyPress = (e) => {
        const {isActive} = this.state
        const evtobj = window.event ? window.event : e
        if (evtobj.keyCode === 75 && evtobj.altKey) this.setState({isActive: !isActive});
        if (evtobj.which === 27 && isActive !== false) this.setState({isActive: false})
    }

    onCloseModal = () => this.setState({isActive: false})
    onSearchSubmit = (e, value) => {
        if (e.keyCode === 13) {
            this.props.onSearchSubmit(value)
            this.onCloseModal()
        }
    }

    render() {
        document.onkeydown = this.KeyPress
        const {isActive} = this.state
        return (
            <Fragment>
                <Router>
                    <div>
                        {pages.map((page) =>
                            <Route
                                key={page.name}
                                exact
                                path={page.route}
                                render={(props) => page.render(props)}
                            />
                        )}
                        <Redirect from="/" to="/login"/>
                    </div>
                </Router>
                {isActive && <ModalMangaSearch isActive={isActive} onCloseModal={this.onCloseModal}
                                               onSearchSubmit={this.onSearchSubmit}/>}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    searchValue: state.searchMangaField.value
})

const mapDispatchToProps = (dispatch) => ({
    onSearchSubmit: value => dispatch({type: 'SET_SEARCH_MANGA_FIELD_VALUE', value})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

