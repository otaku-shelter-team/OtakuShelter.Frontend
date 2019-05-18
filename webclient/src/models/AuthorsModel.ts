import axios from 'axios'
import {IAuthor} from '../../interfaces'

class AuthorsModel {

    public static getAuthorsByMangaId = async (id: number): Promise<IAuthor[]> => {
        try {
            const {data} = await axios.get('/authors/' + id)
            return data.authors
        } catch (e) {
            return [] as IAuthor[]
        }
    }
}

export default AuthorsModel
