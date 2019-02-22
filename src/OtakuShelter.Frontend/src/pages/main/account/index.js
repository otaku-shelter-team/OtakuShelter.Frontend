import React from 'react'
import Table from '../../../componens/table'
import AccountModel from '../../../models/AccountModel'
import dayjs from 'dayjs'
import Loader from '../../../componens/loader'

class Account extends React.Component {
    headers = ['Id', 'Role Id', 'Username', 'Created']
    state = {
        accounts: [],
        isLoaded: false
    }

    async componentDidMount() {
        const accounts = await AccountModel.getAccounts()
        this.setState({
            accounts,
            isLoaded: true
        })
    }

    render() {
        const {accounts, isLoaded} = this.state
        return isLoaded ? <div style={{padding: 20}}>
                <div className="box">
                    <Table
                        headers={this.headers}
                        items={accounts}
                        shema={[
                            {
                                template: (item) => item.id
                            }, {
                                template: (item) => item.roleId
                            }, {
                                template: (item) => item.username
                            }, {
                                template: (item) => dayjs(item.created).format('D/M/YYYY')
                            }
                        ]}
                    />
                </div>
            </div>
            : <Loader/>
    }
}

export default Account
