import axios from 'axios'
import {IChapter} from '../../interfaces'

class ChaptersModel {
    public static getChaptersByMangaId = async (id: number, params: {
        offset: number | null; limit: number | null
    }): Promise<IChapter[]> => {
        try {
            const {data} = await axios.get('/chapters/' + id, {
                params
            })
            return data.chapters
        } catch (e) {
            return [] as IChapter[]
        }
    }
}

export default ChaptersModel
