import React from 'react'
import dayjs from 'dayjs'
import Table from '../../../componens/table'
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
            </div>
            : <Loader/>
    }
}

export default Token
