import React from 'react'
import TableTree, {Headers, Header, Rows, Row, Cell} from '@atlaskit/table-tree'
import dayjs from 'dayjs'
import AccountModel from '../../../models/AccountModel'
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
                    <TableTree>
                        <Headers>
                            {this.headers.map(e => <Header width={200}>{e}</Header>)}
                        </Headers>
                        <Rows
                            items={accounts}
                            render={({id, username, created, role, children}) => (
                                <Row
                                    itemId={id}
                                    items={children}
                                    hasChildren={false}
                                >
                                    <Cell>{id}</Cell>
                                    <Cell>{username}</Cell>
                                    <Cell>{dayjs(created).format('D/M/YYYY')}</Cell>
                                    <Cell>{role}</Cell>
                                </Row>
                            )}
                        />
                    </TableTree>
                </div>
            </div>
            : <Loader/>
    }
}

export default Account
