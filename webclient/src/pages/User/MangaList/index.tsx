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
        const {mangaListStore} = this.props
        mangaListStore!.onMangaListFetch()
    }

    public onChangePage = (query: 'next' | 'prev') => {
        const {mangaListStore} = this.props
        if (query === 'next') {
            mangaListStore!.offset += 20
            mangaListStore!.onMangaListFetch()
        }
        if (query === 'prev') {
            mangaListStore!.offset = mangaListStore!.offset === 0 ? 0 : mangaListStore!.offset - 20
            mangaListStore!.onMangaListFetch()
        }
        window.scrollTo(0, 0)
    }

    public render() {
        const {mangaListStore, history} = this.props
        return (
            <MangaListTemplate mangas={mangaListStore!.mangas} onChangePage={this.onChangePage}
                               offset={mangaListStore!.offset}
                               history={history}/>
        )
    }
}

export default MangaList
