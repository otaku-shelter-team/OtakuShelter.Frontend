import axios from 'axios'

class MangaModel {
    static getMangas = () => axios.get('http://mangas.staging.otaku-shelter.ru/mangas')
        .then(({data}) => data.mangas)
        .catch((error) => error.response.data)

    static getManga = (id) => axios.get(`/mangas/${id}`)
        .then(({data}) => data)
        .catch((error) => error.response.data)
}

export default MangaModel
