import {action, observable} from 'mobx'
import {IManga} from '../../interfaces'
import AuthorsModel from '../models/AuthorsModel'
import MangasModel from '../models/MangasModel'
import TagsModel from '../models/TagsModel'
import TranslatorsModel from '../models/TranslatorsModel'

class MManga implements IMManga {
    @observable public manga: IManga = {
        id: 0,
        title: '',
        description: '',
        image: '',
        type: {
            name: '',
            id: 0
        },
        authors: [],
        tags: [],
        translators: []
    }

    @action public onFetchManga = async (id: number) => {
        this.manga = {...this.manga, ...await MangasModel.getMangaByMangaId(id)}
        this.manga.authors = await AuthorsModel.getAuthorsByMangaId(id)
        this.manga.tags = await TagsModel.getTagsByMangaId(id)
        this.manga.translators = await TranslatorsModel.getTranslatorsByMangaId(id)
    }
}

export interface IMManga {
    manga: IManga,
    onFetchManga: (id: number) => void
}

export default new MManga()
