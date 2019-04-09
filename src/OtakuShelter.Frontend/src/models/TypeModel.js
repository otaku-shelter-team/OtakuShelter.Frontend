import axios from "axios";

class TypeModel {
    static getTypes = (id) => axios.get(`/${id}/types`)
        .then(({data}) => data)
        .catch((error) => error.response.data)
}

export default TypeModel