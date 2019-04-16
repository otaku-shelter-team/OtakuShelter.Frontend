import axios from "axios";

class TagModel {
    static getTags = (id) => axios.get(`/tags/${id}`)
        .then(({data}) => data)
        .catch((error) => error.response.data)
}
export default TagModel