import React from 'react'
import Table from '../../../componens/table'
import MangaModel from '../../../models/MangaModel'

class Manga extends React.Component{
	headers = ['Manga Id', 'Title', 'Description', 'Image']
	state = {
		mangas: []
	}

	async componentDidMount() {
		const mangas = await MangaModel.getMangas()
		this.setState({
			mangas
		})
	}

	render() {
		const {mangas} = this.state
		return <div>
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
	}
}

export default Manga