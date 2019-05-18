import axios from 'axios'
import {IManga} from '../../interfaces'

class MangasModel {
    public static getMangas = async (p: { offset: number, title?: string | undefined }) => {
        try {
            const {data} = await axios.get('/mangas', {
                params:
                    {
                        offset: p.offset,
                        title: p.title
                    }
            })
            return data.mangas
        } catch (e) {
            return []
        }
    }

    public static getMangaByMangaId = async (id: number): Promise<IManga> => {
        try {
            const {data} = await axios.get('/mangas/' + id)
            return data
        } catch (e) {
            return {} as IManga
        }
    }
}

export default MangasModel
