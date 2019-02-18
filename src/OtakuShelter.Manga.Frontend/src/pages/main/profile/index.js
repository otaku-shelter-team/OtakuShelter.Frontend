import React from 'react'
import Table from '../../../componens/table'
import ProfileModel from '../../../models/ProfileModel'
import dayjs from 'dayjs'

class Profile extends React.Component {
	headers = ['Id', 'Account Id', 'Nickname', 'Created']
	state = {
		profiles: []
	}

	async componentDidMount() {
		const profiles = await ProfileModel.getProfiles()

		console.log('profiles', profiles);
		
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
						template: (item) => dayjs(item.created).format('D/M/YYYY hh:mm')
					}
				]}
			/>
		</div>
	}
}

export default Profile