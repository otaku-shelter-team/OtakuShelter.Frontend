import React from 'react'
import Table from '../../../componens/table'
import AccountModel from '../../../models/AccountModel'
import dayjs from 'dayjs'

class Account extends React.Component {
	headers = ['Account Id', 'User Name', 'Create Time', 'Role Id']
	state = {
		accounts: []
	}

	async componentDidMount() {
		const accounts = await AccountModel.getAccounts()
		this.setState({
			accounts
		})
	}

	render() {
		const {accounts} = this.state
		return <div>
			<Table
				headers={this.headers}
				items={accounts}
				shema={[
					{
						template: (item) => item.id
					}, {
						template: (item) => item.username
					}, {
						template: (item) => dayjs(item.created).format('D/M/YYYY')
					}, {
						template: (item) => item.roleId
					}
				]}
			/>
		</div>
	}
}

export default Account