import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {Link} from "react-router-dom";
import React from "react";
import InfoWrapper from "./infoWrapper";

class Card extends React.Component {
    state = {isHovered: false}

    onHover = (isHovered) => {
        this.setState({isHovered: isHovered})
    }

    render() {
        const {mangaItem} = this.props
        const {isHovered} = this.state
        return <ReactCSSTransitionGroup
            transitionName="manga_list"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
        >
            <div className="card" onMouseEnter={() => this.onHover(true)}
                 onMouseLeave={() => this.onHover(false)}>
               <div>
                    <div className="card-image">
                        <img
                            src="http://imgcover.mangachan.me/showfull_retina/uploads/posts/2016-08/thumbs/1470471618_20160416174002_anmsg.jpg"
                            alt="#"
                        />
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">John Smith</p>
                            </div>
                        </div>

                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            <br/>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
               </div>
                {isHovered && (<InfoWrapper mangaItem={mangaItem}/>)}
            </div>
        </ReactCSSTransitionGroup>
    }

}

export default Card
