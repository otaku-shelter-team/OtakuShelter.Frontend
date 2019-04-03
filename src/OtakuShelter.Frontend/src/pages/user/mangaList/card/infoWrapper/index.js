import React from "react";
import './InfoWrapper.scss'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class InfoWrapper extends React.Component {
    render() {
        return <div className="info-wrapper">
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
        </div>
    }
}

export default InfoWrapper
