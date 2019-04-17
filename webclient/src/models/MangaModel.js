import axios from 'axios'

class MangaModel {
    /**
     *
     * @param query
     * @returns {Promise<Array | never>}
     * @description return list of manga
     */
    static getMangas = (query) => axios.get('/mangas', {
        params: query
    })
        .then(({data}) => data.mangas)
        .catch((error) => error.response.data)

    static getManga = (id) => axios.get(`/mangas/${id}`)
        .then(({data}) => data)
        .catch((error) => error.response.data)
}

export default MangaModel
