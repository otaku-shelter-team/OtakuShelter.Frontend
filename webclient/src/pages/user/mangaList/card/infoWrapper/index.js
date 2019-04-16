import React from "react";
import './InfoWrapper.scss'
import {Link} from "react-router-dom";

class InfoWrapper extends React.Component {
    render() {
        const {mangaItem} = this.props
        return <div className="info-wrapper">
            <Link to={`/manga/${mangaItem.id}`}>
                <div className="info-wrapper__content">
                    <div className="info-wrapper__upper">
                        <p>{mangaItem.description} </p>
                    </div>
                    <div className="info-wrapper__body"/>
                    <div className="info-wrapper__lower">
                        <p>

                        </p>
                    </div>
                </div>
            </Link>
        </div>
    }
}

export default InfoWrapper
