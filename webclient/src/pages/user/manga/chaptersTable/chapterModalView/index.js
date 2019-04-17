import * as React from "react";

class ChapterModelView extends React.Component {
    render() {
        const {onModalClose, pages} = this.props
        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div>
                        {pages.map((page)=>(
                            <div key={page.id}>
                                <img src={page.image} alt="#"/>
                            </div>
                        ))}
                    </div>
                    <div></div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => onModalClose()}/>
            </div>
        )
    }
}

export default ChapterModelView