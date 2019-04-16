import {combineReducers} from "redux";
import SearchMangaFieldReducer from "./SearchMangaFieldReducer";

const reducers = combineReducers({
    searchMangaField: SearchMangaFieldReducer
})

export default reducers
