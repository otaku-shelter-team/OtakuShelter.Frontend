import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Description from "./description";
import ChaptersTable from "./chaptersTable";

class UserManga extends React.Component {
    render() {
        return <div>
            <Description/>
            <ChaptersTable/>
        </div>
    }
}

export default UserManga
