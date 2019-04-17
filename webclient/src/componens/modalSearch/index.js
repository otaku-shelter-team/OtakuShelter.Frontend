import React from "react";
import ModalSearchCard from "../modalSearchCard";

class ModalMangaSearch extends React.Component {
    render() {
        const {isActive, onCloseModal, onSearchSubmit, onChangeSearch, mangas,onMangaCardClick} = this.props
        return (
            <div style={{justifyContent: 'none'}} className={`modal ${isActive ? 'is-active' : ''}`}>
                <div className="modal-background" onClick={() => onCloseModal()}/>
                <div className="modal-content">
                    <div className="box">
                        <input autoFocus={true} className="input" type="text" placeholder="Search manga"
                               onChange={(e) => onChangeSearch(e.target.value)}
                               onKeyDown={(e) => onSearchSubmit(e, e.target.value)}
                        />
                    </div>
                    {mangas.length !== 0 && <div>
                        {mangas.map((manga, index) => {
                            if (index < 4) return <ModalSearchCard manga={manga} onMangaCardClick={onMangaCardClick}/>
                        })}
                    </div>}
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => onCloseModal()}/>
            </div>
        )
    }
}

export default ModalMangaSearch
