import React, {Component} from 'react'
import {RouteComponentProps} from 'react-router'
import {IManga} from '../../../../interfaces'
import MangasModel from '../../../models/MangasModel'
import MangaListTemplate from './MangaListTemplate'

interface IMangaListState {
    mangas: IManga[],
    offset: number
}

class MangaList extends Component<RouteComponentProps, IMangaListState> {
    public state = {
        mangas: [],
        offset: 0
    }

    public fetchMangas = async () => {
        const {offset} = this.state
        try {
            const mangas = await MangasModel.getMangas({offset})
            this.setState({
                ...this.state,
                mangas
            }, () => window.scrollTo(0, 0))
        } catch (e) {

        }
    }

    public onChangePage = (query: 'next' | 'prev') => {
        const {offset} = this.state
        if (query === 'next') {
            this.setState({
                ...this.state,
                offset: offset + 20
            }, () => this.fetchMangas())
        }
        if (query === 'prev') {
            this.setState({
                ...this.state,
                offset: offset === 0 ? 0 : offset - 20
            }, () => this.fetchMangas())
        }
    }

    public async componentDidMount(): Promise<void> {
        const {offset} = this.state
        try {
            const mangas = await MangasModel.getMangas({offset})
            this.setState({
                ...this.state,
                mangas
            })
        } catch (e) {

        }
    }

    public render() {
        const {mangas, offset} = this.state
        return (
            <MangaListTemplate mangas={mangas} onChangePage={this.onChangePage} offset={offset}/>
        )
    }
}

export default MangaList
