import React from "react";
import Navigation from "../admin";

class UserMain extends React.Component {
    render() {
        const {section, sectionName} = this.props;
        return <div style={{display: 'flex'}}>
            <div>
                <Navigation sectionName={sectionName}/>
            </div>
            <div style={{width: '100%'}}>
                {section}
            </div>
        </div>
    }
}

export default UserMain
