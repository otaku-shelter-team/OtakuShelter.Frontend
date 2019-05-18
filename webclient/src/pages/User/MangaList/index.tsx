import {inject, observer} from 'mobx-react'
import React, {Component} from 'react'
import {RouteComponentProps} from 'react-router'
import {IManga} from '../../../../interfaces'
import {IMMangaList} from '../../../store/MMangaList'
import MangaListTemplate from './MangaListTemplate'

interface IMangaListState {
    mangas: IManga[],
    offset: number,
    manga: string,

}

interface IMangaListProps extends RouteComponentProps {
    mangaListStore?: IMMangaList
}

@inject((allStores: any) => ({
    mangaListStore: allStores.mangaListStore as IMMangaList,
}))
@observer
class MangaList extends Component<IMangaListProps, IMangaListState> {
    public async componentDidMount(): Promise<void> {
        this!.props!.mangaListStore!.onMangaListFetch()
    }

    public onChangePage = (query: 'next' | 'prev') => {
        if (query === 'next') {
            this!.props!.mangaListStore!.offset += 20
            this!.props!.mangaListStore!.onMangaListFetch()
        }
        if (query === 'prev') {
            this!.props!.mangaListStore!.offset = this!.props!.mangaListStore!.offset === 0 ? 0 : this!.props!.mangaListStore!.offset - 20
            this!.props!.mangaListStore!.onMangaListFetch()
        }
        window.scrollTo(0, 0)
    }

    public render() {
        return (
            <MangaListTemplate mangas={this!.props!.mangaListStore!.mangas} onChangePage={this.onChangePage}
                               offset={this!.props!.mangaListStore!.offset}
                               history={this.props.history}/>
        )
    }
}

export default MangaList
