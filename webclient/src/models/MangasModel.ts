import axios from 'axios'

class MangasModel {
    public static getMangas = async (p: { offset: number }) => {
        try {
            const {data} = await axios.get('/mangas', {params: {offset: p.offset}})
            return data.mangas
        } catch (e) {
            return []
        }
    }
}

export default MangasModel
