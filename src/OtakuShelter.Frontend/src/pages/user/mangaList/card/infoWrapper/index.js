import React from "react";
import './InfoWrapper.scss'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {Link} from "react-router-dom";

class InfoWrapper extends React.Component {
    render() {
        const {mangaItem} = this.props
        return <div className="info-wrapper">
            <Link to={`/manga/${mangaItem}`}>
                <ReactCSSTransitionGroup
                    transitionName="info-wrapper__content"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <div className="info-wrapper__content">
                        <ReactCSSTransitionGroup
                            transitionName="info-wrapper__upper"
                            transitionAppear={true}
                            transitionAppearTimeout={500}
                            transitionEnter={false}
                            transitionLeave={false}
                        >
                            <div className="info-wrapper__upper">
                                <p>
                                    some upper info
                                    need more information
                                    by this
                                </p>
                            </div>
                        </ReactCSSTransitionGroup>
                        <div className="info-wrapper__body"/>
                        <ReactCSSTransitionGroup
                            transitionName="info-wrapper__lower"
                            transitionAppear={true}
                            transitionAppearTimeout={500}
                            transitionEnter={false}
                            transitionLeave={false}
                        >
                            <div className="info-wrapper__lower">
                                <p>
                                    some lower info
                                    need more information
                                    by this
                                </p>
                            </div>
                        </ReactCSSTransitionGroup>
                    </div>
                </ReactCSSTransitionGroup>
            </Link>
        </div>
    }
}

export default InfoWrapper
