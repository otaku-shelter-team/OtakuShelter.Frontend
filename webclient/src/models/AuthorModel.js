import axios from "axios";

class AuthorModel {
    static getAuthors = (id) => axios.get(`/authors/${id}`)
        .then(({data}) => data)
        .catch((error) => error.response.data)
}

export default AuthorModel