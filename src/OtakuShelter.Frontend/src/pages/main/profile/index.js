import React from 'react'
import Table from '../../../componens/table'
import ProfileModel from '../../../models/ProfileModel'
import dayjs from 'dayjs'
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
            </div>
            : <Loader/>
    }
}

export default Profile
