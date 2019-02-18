import React from 'react'
import Table from '../../../componens/table'
import MangaModel from '../../../models/MangaModel'
import Loader from '../../../componens/loader'

class Manga extends React.Component {
    headers = ['Id', 'Title', 'Description', 'Image']
    state = {
        mangas: [],
        isLoaded: false
    }

    async componentDidMount() {
        const mangas = await MangaModel.getMangas()
        this.setState({
            mangas,
            isLoaded: true
        })
    }

    render() {
        const {mangas, isLoaded} = this.state
        return isLoaded ? <div style={{padding: 20}}>
                <div className="box">
                    <Table
                        headers={this.headers}
                        items={mangas}
                        shema={[
                            {
                                template: (item) => item.id
                            }, {
                                template: (item) => item.title
                            }, {
                                template: (item) => item.description
                            }, {
                                template: (item) => item.image
                            }
                        ]}
                    />
                </div>
            </div>
            : <Loader/>
    }
}

export default Manga
