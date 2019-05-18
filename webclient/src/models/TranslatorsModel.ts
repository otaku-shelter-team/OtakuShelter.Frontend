import axios from 'axios'
import {ITranslator} from '../../interfaces'

class TranslatorsModel {

    public static getTranslatorsByMangaId = async (id: number): Promise<ITranslator[]> => {
        try {
            const {data} = await axios.get('/translators/' + id)
            return data.translators
        } catch (e) {
            return [] as ITranslator[]
        }
    }
}

export default TranslatorsModel
