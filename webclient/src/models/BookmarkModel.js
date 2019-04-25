import axios from "axios";

class BookmarkModel {
    static getBookmark = (query) => axios.get(`/bookmarks`, {params: query})
        .then(({data}) => data.bookmarks)
        .catch((error) => error.response.data)

    static setBookmark = (query) => axios.post(`/bookmarks`, query)
        .then(({data}) => data)
        .catch((error) => error.response.data)

    static deleteBookmark = (id) => axios.delete(`/bookmarks/${id}`, )
        .then(({data}) => data)
        .catch((error) => error.response.data)
}

export default BookmarkModel