import React from "react";
import Card from "./card";
import MangaModel from "../../../models/MangaModel";
import CustomLoader from "../../../componens/loader";
import {connect} from "react-redux";

class MangaList extends React.Component {
    state = {
        mangas: [],
        isLoaded: false,
        page: 0
    }

    async componentDidMount() {
        const {searchValue} = this.props
        if (searchValue === undefined) {
            try {
                const mangas = await MangaModel.getMangas()
                this.setState({mangas, isLoaded: true})
            } catch (e) {
            }
        } else {
            this.setState({mangas: searchValue, isLoaded: true})
        }
    }

    onNextPage = async () => {
        this.setState({
            page: this.state.page + 20
        }, async () => {
            try {
                const mangas = await MangaModel.getMangas({
                    offset: this.state.page
                })
                this.setState({mangas})
            } catch (e) {
            }
        })
    }

    onPrevPage = () => {
        if(this.state.page === 0)
            return
        this.setState({
            page: this.state.page - 20
        }, async () => {
            try {
                const mangas = await MangaModel.getMangas({
                    offset: this.state.page
                })
                this.setState({mangas})
            } catch (e) {
            }
        })
    }

    render() {
        const {mangas, isLoaded} = this.state
        console.log(mangas)
        return !isLoaded
            ? <CustomLoader/>
            : (
                <div className="columns box is-flex">
                    {mangas.map(manga => (
                            <Card key={manga.id} mangaItem={manga}/>
                        )
                    )}
                    <nav className="pagination is-small" role="navigation" aria-label="pagination">
                        <a className="pagination-previous" onClick={() => this.onPrevPage()}>Previous</a>
                        <a className="pagination-next" onClick={() => this.onNextPage()}>Next page</a>
                    </nav>
                </div>
            )
    }
}

const mapStateToProps = (state) => ({
    searchValue: state.searchMangas.value,
})

export default connect(mapStateToProps)(MangaList)
