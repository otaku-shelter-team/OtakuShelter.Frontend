import React from "react";
import Card from "./card";
import MangaModel from "../../../models/MangaModel";
import CustomLoader from "../../../componens/loader";

class MangaList extends React.Component {
    state = {
        mangas: [],
        isLoaded: false
    }

    async componentDidMount() {
        try {
            const mangas = await MangaModel.getMangas()
            this.setState({mangas, isLoaded: true})
        } catch (e) {

        }
    }

    render() {
        const {mangas, isLoaded} = this.state
        return !isLoaded
            ? <CustomLoader/>
            : (
                <div className="columns box is-flex">
                    {mangas.map(manga => (
                            <Card key={manga.id} mangaItem={manga}/>
                        )
                    )}
                    {/*<nav className="pagination is-small" role="navigation" aria-label="pagination">*/}
                    {/*    <a className="pagination-previous">Previous</a>*/}
                    {/*    <a className="pagination-next">Next page</a>*/}
                    {/*    <ul className="pagination-list">*/}
                    {/*        <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>*/}
                    {/*        <li><span className="pagination-ellipsis">&hellip;</span></li>*/}
                    {/*        <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>*/}
                    {/*        <li><a className="pagination-link is-current" aria-label="Page 46"*/}
                    {/*               aria-current="page">46</a>*/}
                    {/*        </li>*/}
                    {/*        <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>*/}
                    {/*        <li><span className="pagination-ellipsis">&hellip;</span></li>*/}
                    {/*        <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}
                </div>
            )
    }
}

export default MangaList
