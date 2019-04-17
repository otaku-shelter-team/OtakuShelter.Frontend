import {combineReducers} from "redux";
import SearchMangas from "./SearchMangas";

const reducers = combineReducers({
    searchMangas: SearchMangas,
})

export default reducers
