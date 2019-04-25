import React, {Fragment} from "react"
import {Link} from "react-router-dom";
import "./Description.scss"
import BookmarkModel from "../../../../models/BookmarkModel";

class Description extends React.Component {
    bookmarks = [
        {label: 'Читаю'},
        {label: 'Прочитано'},
        {label: 'Запланировано'},
        {label: 'Брошено'},
        {label: 'Отложено'},
        {label: 'Пересматриваю'}
    ]
    state = {
        isOpenDropdown: false,
        activeBookmark: 'Добавить в избранное'
    }

    async componentDidMount() {
        try {
            const {id} = this.props.match.params
            const activeBookmark = await BookmarkModel.getBookmark({mangaId: id})
            console.log(activeBookmark[0].name)
            this.setState({activeBookmark: activeBookmark[0].name})
        } catch (e) {

        }
    }

    onAddBookmark = async (bookmark) => {
        try {
            const {id} = this.props.match.params
            const activeBookmark = await BookmarkModel.getBookmark({mangaId: id})
            await BookmarkModel.deleteBookmark(activeBookmark[0].id)
            await BookmarkModel.setBookmark({name: bookmark.label, mangaId: id})
            this.setState({activeBookmark: bookmark.label, isOpenDropdown: false})
        } catch (e) {

        }
    }

    render() {
        const {manga} = this.props
        const {isOpenDropdown, activeBookmark} = this.state
        const {bookmarks} = this
        return (
            <section className="hero is-fullheight is-default is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns is-vcentered">
                            <div className="column is-5">
                                <div className="columns is-column">
                                    <div className="column">
                                        <div className={`dropdown ${isOpenDropdown ? 'is-active' : ''}`}>
                                            <div className="dropdown-trigger">
                                                <button onClick={() => this.setState({isOpenDropdown: !isOpenDropdown})}
                                                        className="button" aria-haspopup="true"
                                                        aria-controls="dropdown-menu">
                                                    <span>{activeBookmark}</span>
                                                    <span className="icon is-small">
                                                <i className="fas fa-angle-down" aria-hidden="true"/>
                                            </span>
                                                </button>
                                            </div>
                                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                                <div className="dropdown-content">
                                                    {bookmarks.map((bookmark, index) => bookmark.label !== activeBookmark && (
                                                        <a onClick={() => this.onAddBookmark(bookmark)} key={index}
                                                           href="#"
                                                           className="dropdown-item">
                                                            {bookmark.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <img
                                            src={manga.image}
                                            alt="Description"/>
                                    </div>
                                </div>
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
