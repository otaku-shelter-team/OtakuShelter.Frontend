import axios from 'axios'
import {ITag} from '../../interfaces'

class TagsModel {
    public static getTags = async () => {
        try {
            const {data} = await axios.get('/tags')
            return data.tags
        } catch (e) {
            return []
        }
    }

    public static getTagsByMangaId = async (id: number): Promise<ITag[]> => {
        try {
            const {data} = await axios.get('/tags/' + id)
            return data.tags
        } catch (e) {
            return [] as ITag[]
        }
    }
}

export default TagsModel
