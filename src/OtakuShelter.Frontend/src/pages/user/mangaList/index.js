import React from "react";
import * as nanoid from "nanoid";
import Card from "./card";

class MangaList extends React.Component {
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    render() {
        return <div className="box is-flex">
            {this.a.map(e => (
                    <Card key={nanoid()} mangaItem={e}/>
                )
            )}
            <nav className="pagination is-small" role="navigation" aria-label="pagination">
                <a className="pagination-previous">Previous</a>
                <a className="pagination-next">Next page</a>
                <ul className="pagination-list">
                    <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
                    <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                    <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
                </ul>
            </nav>
        </div>
    }
}

export default MangaList
