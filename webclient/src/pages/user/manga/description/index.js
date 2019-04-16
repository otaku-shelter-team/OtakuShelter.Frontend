import React, {Fragment} from "react"
import {Link} from "react-router-dom";
import "./Description.scss"

class Description extends React.Component {
    render() {
        const {manga} = this.props
        return (
            <section className="hero is-fullheight is-default is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns is-vcentered">
                            <div className="column is-5">
                                <img
                                    src={manga.image}
                                    alt="Description"/>
                            </div>
                            <div className="column is-6 is-offset-1 is-flex is-column">
                                <div className="description__title">
                                    <h1 className="title is-2">
                                        {manga.title}
                                    </h1>
                                </div>
                                <div className="description">
                                    <h1 className="title is-4">
                                        Тип:
                                    </h1>
                                    <h2 className="subtitle is-4">
                                        <Link to={"/manga"}>
                                            {manga.type.name}
                                        </Link>
                                    </h2>
                                </div>
                                <div className="description">
                                    <h1 className="title is-4">
                                        Жанры:
                                    </h1>
                                    <h2 className="subtitle is-4 has-text-left">
                                        {manga.tags.map((tag, index) => (
                                            <Fragment>
                                                <Link to={"/manga"}>
                                                    {tag.name}
                                                </Link>
                                                {manga.tags.length - 1 !== index ? ', ' : ''}
                                            </Fragment>
                                        ))}
                                    </h2>
                                </div>
                                <div className="description">
                                    <h1 className="title is-4">
                                        Авторы:
                                    </h1>
                                    <h2 className="subtitle is-4 has-text-left">
                                        {manga.authors.map((author, index) => (
                                            <Fragment>
                                                <Link to={"/manga"}>
                                                    {author.name}
                                                </Link>
                                                {manga.authors.length - 1 !== index ? ', ' : ''}
                                            </Fragment>
                                        ))}
                                    </h2>
                                </div>
                                <div className="description">
                                    <h1 className="title is-4">
                                        Переводчики:
                                    </h1>
                                    <h2 className="subtitle is-4 has-text-left">
                                        {manga.translators.map((translator, index) => (
                                            <Fragment>
                                                <Link to={"/manga"}>
                                                    {translator.name}
                                                </Link>
                                                {manga.translators.length !== index ? ', ' : ''}
                                            </Fragment>
                                        ))}
                                    </h2>
                                </div>
                                <div className="description ">
                                    <p className="is-size-5 has-text-left">
                                        {manga.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Description
