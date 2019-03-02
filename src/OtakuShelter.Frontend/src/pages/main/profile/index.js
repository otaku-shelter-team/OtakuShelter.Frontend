import React from 'react'
import TableTree, {Cell, Header, Headers, Row, Rows} from "@atlaskit/table-tree";
import dayjs from 'dayjs'
import ProfileModel from '../../../models/ProfileModel'
import Loader from '../../../componens/loader'

class Profile extends React.Component {
    headers = ['Id', 'Account Id', 'Nickname', 'Created']
    state = {
        profiles: [],
        isLoaded: false
    }

    async componentDidMount() {
        const profiles = await ProfileModel.getProfiles()

        this.setState({
            profiles,
            isLoaded: true
        })
    }

    render() {
        const {profiles, isLoaded} = this.state
        return isLoaded ? <div style={{padding: 20}}>
                <div className="box">
                    <TableTree>
                        <Headers>
                            {this.headers.map(e => <Header width={200}>{e}</Header>)}
                        </Headers>
                        <Rows
                            items={profiles}
                            render={({id, accountId, nickname, created, children}) => (
                                <Row
                                    itemId={id}
                                    items={children}
                                    hasChildren={false}
                                >
                                    <Cell>{id}</Cell>
                                    <Cell>{accountId}</Cell>
                                    <Cell>{nickname}</Cell>
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

export default Profile
