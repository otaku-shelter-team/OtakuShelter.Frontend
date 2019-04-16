import axios from "axios";

class TranslatorModel {
    static getTranslators = (id) => axios.get(`/translators/${id}`)
        .then(({data}) => data)
        .catch((error) => error.response.data)
}

export default TranslatorModel