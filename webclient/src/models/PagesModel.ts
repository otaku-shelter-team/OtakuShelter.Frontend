import axios from 'axios'
import {IPage} from '../../interfaces'

class PagesModel {
    public static getPagesByChapterId = async (id: number): Promise<IPage[]> => {
        try {
            const {data} = await axios.get('/pages/' + id)
            return data.pages
        } catch (e) {
            return [] as IPage[]
        }
    }
}

export default PagesModel
