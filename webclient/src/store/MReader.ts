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
    prevPage: IPage,
    onFetchPages: () => Promise<void>,
    onNextPage: () => void,
    onPrevPage: () => void,
    onChangePage: (page: IPage) => void,
    nextChapter: boolean,
    prevChapter: boolean
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
    @observable public prevPage = {
        id: 0,
        image: ''
    }
    @observable public nextChapter = false
    @observable public prevChapter = false

    @action public onFetchPages = async () => {
        // @ts-ignore
        this.pages = await PagesModel.getPagesByChapterId(this.chapterId)
        if (this.nextChapter) {
            this.nextChapter = false
            this.currentPage = this.pages[0]
            this.nextPage = this.pages[1]
            this.prevPage = this.pages[-1]
            return
        }
        if (this.prevChapter) {
            this.prevChapter = false
            this.currentPage = this.pages[this.pages.length - 1]
            this.nextPage = this.pages[this.pages.length]
            this.prevPage = this.pages[this.pages.length - 2]
            return
        }
        this.currentPage = this.pages[0]
        this.nextPage = this.pages[1]
        this.prevPage = this.pages[-1]
    }

    @action public onNextPage = () => {
        this.prevPage = this.currentPage
        this.currentPage = this.nextPage
        if (this.currentPage === undefined) {
            this.nextChapter = true
            this.currentPage = this.prevPage
            return
        }
        this.nextPage = this.pages[this.pages.findIndex(page => page.id === this.currentPage.id) + 1]
        window.scrollTo(0, 0)
    }

    @action public onPrevPage = () => {
        this.nextPage = this.currentPage
        this.currentPage = this.prevPage
        if (this.currentPage === undefined) {
            this.prevChapter = true
            this.currentPage = this.nextPage
            return
        }
        this.prevPage = this.pages[this.pages.findIndex(page => page.id === this.currentPage.id) - 1]
        window.scrollTo(0, 0)
    }

    @action public onChangePage = (nextPage: IPage) => {
        this.currentPage = nextPage
        this.nextPage = this.pages[this.pages.findIndex(page => page.id === this.currentPage.id) + 1]
    }
}

export default new MReader()
