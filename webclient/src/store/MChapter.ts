import {action, observable} from 'mobx'
import {IChapter} from '../../interfaces'
import ChaptersModel from '../models/ChaptersModel'

export interface IMChapter {
    offset: number,
    limit: number,
    mangaId: number,
    chapters: IChapter[],
    onFetchChapters: (mangaId: number) => Promise<void>,
    onNextPage: () => void,
    onPrevPage: () => void
}

class MChapter implements IMChapter {
    @observable public offset = 0
    @observable public limit = 10
    @observable public chapters = []
    @observable public mangaId = 0

    @action public onFetchChapters = async (): Promise<void> => {
        // @ts-ignore
        this.chapters = await ChaptersModel.getChaptersByMangaId(this.mangaId, {offset: this.offset, limit: this.limit})
    }

    @action public onNextPage = () => {
        this.offset += 10
        this.onFetchChapters()
    }

    @action public onPrevPage = () => {
        this.offset -= 10
        this.onFetchChapters()
    }
}

export default new MChapter()
