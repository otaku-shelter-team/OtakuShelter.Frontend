import {action, observable} from 'mobx'
import {IChapter, IPage} from '../../interfaces'
import PagesModel from '../models/PagesModel'

export interface IMReader {
    chapterId: number,
    chapters: IChapter[]
    mangaId: number,
    pageId: number,
    pages: IPage[],
    currentPage: IPage,
    nextPage: IPage,
    onFetchPages: () => Promise<void>,
    onNextPage: () => void,
    onChangePage: (page: IPage) => void,
    nextChapter: boolean
}

class MReader implements IMReader {
    @observable public chapterId = 0
    @observable public chapters = []
    @observable public mangaId = 0
    @observable public pageId = 0
    @observable public pages: IPage[] = []
    @observable public currentPage = {
        id: 0,
        image: ''
    }
    @observable public nextPage = {
        id: 0,
        image: ''
    }
    @observable public nextChapter = false

    @action public onFetchPages = async () => {
        // @ts-ignore
        this.pages = await PagesModel.getPagesByChapterId(this.chapterId)
        this.currentPage = this.pages[0]
        this.nextPage = this.pages[1]
    }

    @action public onNextPage = () => {
        this.currentPage = this.nextPage
        if (this.currentPage === undefined) {
            this.nextChapter = true
            return
        }
        this.nextPage = this.pages[this.pages.findIndex(page => page.id === this.currentPage.id) + 1]

        window.scrollTo(0, 0)
    }

    @action public onChangePage = (nextPage: IPage) => {
        this.currentPage = nextPage
        this.nextPage = this.pages[this.pages.findIndex(page => page.id === this.currentPage.id) + 1]
    }
}

export default new MReader()
