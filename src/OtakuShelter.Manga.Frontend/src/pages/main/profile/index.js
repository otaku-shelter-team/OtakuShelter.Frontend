import React from 'react'
import Table from '../../../componens/table'
import ProfileModel from '../../../models/ProfileModel'
import dayjs from '../account'

class Profile extends React.Component {
	headers = ['Profile Id', 'Account Id', 'Nickname', 'Create Time']
	state = {
		profiles: []
	}

	async componentDidMount() {
		const profiles = await ProfileModel.getProfiles()
		this.setState({
			profiles
		})
	}

	render() {
		const {profiles} = this.state
		return <div>
			<Table
				headers={this.headers}
				items={profiles}
				shema={[
					{
						template: (item) => item.id
					}, {
						template: (item) => item.accountId
					}, {
						template: (item) => item.nickname
					}, {
						template: (item) => dayjs(item.created).format('D/M/YYYY')
					}
				]}
			/>
		</div>
	}
}

export default Profile