import axios from "axios";

class ChapterModel {
    static getChapters = (id) => axios.get(`/chapters/${id}`)
        .then(({data}) => data)
        .catch((error) => error.response.data)
}
export default ChapterModel