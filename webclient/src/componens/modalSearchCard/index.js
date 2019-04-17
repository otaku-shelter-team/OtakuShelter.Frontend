import * as React from "react";
import './ModalSearchCard.scss'

class ModalSearchCard extends React.Component {
    render() {
        const {manga, onMangaCardClick} = this.props
        return (
            <div className="modal-search-card is-active" onClick={() => onMangaCardClick(manga.id)}>
                <img className="modal-search-card__image" src={manga.image} alt="#"/>
                <div className="modal-search-card__content">
                    <div className="modal-search-card__title title is-5">
                        {manga.title}
                    </div>
                    <div className="modal-search-card__description">
                        {manga.description.slice(0, 150)}
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalSearchCard