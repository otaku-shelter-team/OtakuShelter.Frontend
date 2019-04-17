import axios from "axios";

class PageModel {
    static getPages = (id) => axios.get(`/pages/${id}`)
        .then(({data}) => data.pages)
        .catch((error) => error.response.data)
}

export default PageModel