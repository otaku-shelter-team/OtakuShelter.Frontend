import React from 'react'
import Table from '../../../componens/table'
import RoleModel from '../../../models/RoleModel'

class Role extends React.Component{
	headers = ['Role Id', 'Role Name']
	state = {
		roles: []
	}

	async componentDidMount() {
		const roles = await RoleModel.getRoles()
		this.setState({
			roles
		})
	}

	render() {
		const {roles} = this.state
		return <div>
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
	}
}

export default Role