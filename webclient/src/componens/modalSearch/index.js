import React from "react";

class ModalMangaSearch extends React.Component {
    render() {
        const {isActive, onCloseModal, onSearchSubmit} = this.props
        return (
            <div className={`modal ${isActive ? 'is-active' : ''}`}>
                <div className="modal-background" onClick={() => onCloseModal()}/>
                <div className="modal-content">
                    <div className="box">
                        <input autoFocus={true}   className="input" type="text" placeholder="Search manga"
                               onKeyDown={(e) => onSearchSubmit(e, e.target.value)}/>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => onCloseModal()}/>
            </div>
        )
    }
}

export default ModalMangaSearch
