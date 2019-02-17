import React from 'react'
import dayjs from 'dayjs'
import Table from '../../../componens/table'
import TokenModel from '../../../models/TokenModel'

class Token extends React.Component {
	headers = ['Token Id', 'IP Address', 'User Agent', 'Create Time']
	state = {
		tokens: []
	}

	async componentDidMount() {
		const tokens = await TokenModel.getTokens()
		this.setState({
			tokens
		})
	}

	render() {
		const {tokens} = this.state
		return <div>
			<Table
				headers={this.headers}
				items={tokens}
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

export default Token