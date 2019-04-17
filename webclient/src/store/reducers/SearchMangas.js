const SearchMangas = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SEARCH_MANGAS': {
            return {...state, value: [...action.value]}
        }
        default:
            return state
    }
}

export default SearchMangas
