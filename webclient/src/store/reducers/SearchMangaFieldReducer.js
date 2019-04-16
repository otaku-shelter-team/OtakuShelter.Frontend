const SearchMangaFieldReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SEARCH_MANGA_FIELD_VALUE': {
            console.log(action)
            return {...state, value: action.value}
        }
        default:
            return state
    }
}

export default SearchMangaFieldReducer
