import React from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Description extends React.Component {
    render() {
        return (
            <section className="hero is-fullheight is-default is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns is-vcentered">
                            <div className="column is-5">

                                <ReactCSSTransitionGroup
                                    transitionName="manga_image"
                                    transitionAppear={true}
                                    transitionAppearTimeout={500}
                                    transitionEnter={false}
                                    transitionLeave={false}
                                >
                                    <img
                                        src="http://imgcover.mangachan.me/showfull_retina/uploads/posts/2011-09/thumbs/1315496197_how-to-make-a-gentle-world.jpg"
                                        alt="Description"/>
                                </ReactCSSTransitionGroup>
                            </div>
                            <div className="column is-6 is-offset-1 is-flex is-column">
                                <ReactCSSTransitionGroup
                                    transitionName="manga_description"
                                    transitionAppear={true}
                                    transitionAppearTimeout={500}
                                    transitionEnter={false}
                                    transitionLeave={false}
                                >
                                    <h1 className="title is-2">
                                        Superhero Scaffolding
                                    </h1>
                                    <h2 className="subtitle is-4">
                                        Let this cover page describe a product or service.
                                    </h2>
                                    <br/>
                                    <p className="has-text-centered">
                                        <a className="button is-medium is-info is-outlined">
                                            Learn more
                                        </a>
                                    </p>
                                </ReactCSSTransitionGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Description
