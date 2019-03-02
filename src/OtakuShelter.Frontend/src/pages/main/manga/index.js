import React from 'react'
import TableTree, {Cell, Header, Headers, Row, Rows} from "@atlaskit/table-tree";
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
                    <TableTree>
                        <Headers>
                            {this.headers.map(e => <Header width={200}>{e}</Header>)}
                        </Headers>
                        <Rows
                            items={mangas}
                            render={({id, title, description, image, children}) => (
                                <Row
                                    itemId={id}
                                    items={children}
                                    hasChildren={false}
                                >
                                    <Cell>{id}</Cell>
                                    <Cell>{title}</Cell>
                                    <Cell>{description}</Cell>
                                    <Cell>{image}</Cell>
                                </Row>
                            )}
                        />
                    </TableTree>
                </div>
            </div>
            : <Loader/>
    }
}

export default Manga
