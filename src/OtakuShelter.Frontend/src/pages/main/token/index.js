import React from 'react'
import dayjs from 'dayjs'
import TableTree,    {Cell, Header, Headers, Row, Rows} from "@atlaskit/table-tree";
import Loader from '../../../componens/loader'
import TokenModel from '../../../models/TokenModel'

class Token extends React.Component {
    headers = ['Token Id', 'IP Address', 'User Agent', 'Create Time']
    state = {
        tokens: [],
        isLoaded: false
    }

    async componentDidMount() {
        const tokens = await TokenModel.getTokens()
        this.setState({
            tokens,
            isLoaded: true
        })
    }

    render() {
        const {tokens, isLoaded} = this.state
        return isLoaded
            ? <div style={{padding: 20}}>
                <div className="box">
                    <TableTree>
                        <Headers>
                            {this.headers.map(e => <Header width={200}>{e}</Header>)}
                        </Headers>
                        <Rows
                            items={tokens}
                            render={({id, ipAddress, userAgent, created, children}) => (
                                <Row
                                    itemId={id}
                                    items={children}
                                    hasChildren={false}
                                >
                                    <Cell>{id}</Cell>
                                    <Cell>{ipAddress}</Cell>
                                    <Cell>{userAgent}</Cell>
                                    <Cell>{dayjs(created).format('D/M/YYYY')}</Cell>
                                </Row>
                            )}
                        />
                    </TableTree>
                </div>
            </div>
            : <Loader/>
    }
}

export default Token
