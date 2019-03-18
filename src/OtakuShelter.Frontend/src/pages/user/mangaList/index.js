import React from "react";
import {Link} from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MangaList extends React.Component {
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    render() {
        return <div className="box is-flex">
            {this.a.map(e => (
                    <ReactCSSTransitionGroup
                        transitionName="manga_list"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnter={false}
                        transitionLeave={false}
                    >
                        <div className="card">
                            <Link to={`/manga/${e}`}>
                                <div className="card-image">
                                    <img
                                        src="http://imgcover.mangachan.me/showfull_retina/uploads/posts/2016-08/thumbs/1470471618_20160416174002_anmsg.jpg"
                                        alt="Placeholder image"/>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">John Smith</p>
                                        </div>
                                    </div>

                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                        <a href="#">#css</a> <a href="#">#responsive</a>
                                        <br/>
                                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </ReactCSSTransitionGroup>
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
