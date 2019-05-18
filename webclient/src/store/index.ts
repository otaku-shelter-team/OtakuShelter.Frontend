import chaptersStore, {IMChapter} from './MChapter'
import loginStore, {IMLogin} from './MLogin'
import mangaStore, {IMManga} from './MManga'
import mangaListStore, {IMMangaList} from './MMangaList'
import readerStore, {IMReader} from './MReader'

class Store implements IStore {
    public loginStore = loginStore
    public mangaListStore = mangaListStore
    public mangaStore = mangaStore
    public chaptersStore = chaptersStore
    public readerStore = readerStore
}

export interface IStore {
    loginStore: IMLogin,
    mangaListStore: IMMangaList,
    mangaStore: IMManga,
    chaptersStore: IMChapter,
    readerStore: IMReader
}

export default new Store()
