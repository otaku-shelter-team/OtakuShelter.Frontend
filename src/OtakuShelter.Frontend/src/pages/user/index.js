import React from "react";
import Navigation from "../../componens/navigation";
import pages from "../../configs/pagesConfig";

class UserMain extends React.Component {
    render() {
        const {component} = this.props;
        return <div style={{display: 'flex'}}>
            <div>
                <Navigation sections={pages} sectionName={component.id}/>
            </div>
            <div style={{width: '100%'}}>
                {component}
            </div>
        </div>
    }
}



export default UserMain
