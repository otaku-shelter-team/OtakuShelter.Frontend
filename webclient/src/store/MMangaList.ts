import {action, observable} from 'mobx'
import {IManga} from '../../interfaces'
import MangasModel from '../models/MangasModel'

class MMangaList implements IMMangaList {
    @observable public searchManga = ''
    @observable public mangas = []
    @observable public offset = 0

    @action public onMangaListFetch = async (query?: string) => {
        if (query !== undefined) {
            this.offset = 0
            const mangas = await MangasModel.getMangas({offset: this.offset, title: this.searchManga})
            this.mangas = mangas
        } else {
            const mangas = await MangasModel.getMangas({offset: this.offset})
            this.mangas = mangas
        }
    }
}

export interface IMMangaList {
    searchManga: string,
    mangas: IManga[],
    offset: number
    onMangaListFetch: (query?: string) => void
}

export default new MMangaList()
