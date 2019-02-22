import React from 'react'
import Table from '../../../componens/table'
import RoleModel from '../../../models/RoleModel'
import Loader from '../../../componens/loader'

class Role extends React.Component {
    headers = ['Id', 'Name']
    state = {
        roles: [],
        isLoaded: false
    }

    async componentDidMount() {
        const roles = await RoleModel.getRoles()
        this.setState({
            roles,
            isLoaded: true
        })
    }

    render() {
        const {roles, isLoaded} = this.state
        return isLoaded ? <div style={{padding: 20}}>
                <div className="box">
                    <Table
                        headers={this.headers}
                        items={roles}
                        shema={[
                            {
                                template: (item) => item.id
                            }, {
                                template: (item) => item.name
                            }
                        ]}
                    />
                </div>
            </div>
            : <Loader/>
    }
}

export default Role
