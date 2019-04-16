import React from "react";
import InfoWrapper from "./infoWrapper";
import './Card.scss'

class Card extends React.Component {
    state = {isHovered: false}

    onHover = (isHovered) => {
        this.setState({isHovered: isHovered})
    }

    render() {
        const {mangaItem} = this.props
        const {isHovered} = this.state
        return (
            <div className="column card is-3" onMouseEnter={() => this.onHover(true)}
                 onMouseLeave={() => this.onHover(false)}>
                <div>
                    <div className="card-image">
                        <img
                            src={mangaItem.image}
                            alt="#"
                        />
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-6">{mangaItem.title}</p>
                            </div>
                        </div>

                        {/*<div className="content">*/}
                        {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                        {/*    Phasellus nec iaculis mauris. <a>@bulmaio</a>.*/}
                        {/*    <a>#css</a> <a>#responsive</a>*/}
                        {/*    <br/>*/}
                        {/*    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>*/}
                        {/*</div>*/}
                    </div>
                </div>
                {isHovered && (<InfoWrapper mangaItem={mangaItem}/>)}
            </div>
        )
    }

}

export default Card
