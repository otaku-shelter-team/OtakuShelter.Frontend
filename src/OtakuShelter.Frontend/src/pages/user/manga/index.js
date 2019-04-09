import React from "react";
import Description from "./description";
import ChaptersTable from "./chaptersTable";
import CustomLoader from "../../../componens/loader";
import MangaModel from "../../../models/MangaModel";
import AuthorModel from "../../../models/AuthorModel";
import ChapterModel from "../../../models/ChapterModel";
import TagModel from "../../../models/TagModel";
import TranslatorModel from "../../../models/TranslatorModel";

class UserManga extends React.Component {
    state = {
        manga: {},
        isLoaded: false
    }

    async componentDidMount() {
        try {
            const {id} = this.props.match.params
            const manga = await MangaModel.getManga(id)
            const author = await AuthorModel.getAuthors(id)
            // const chapters = await ChapterModel.getChapters(id)
            const tags = await TagModel.getTags(id)
            const translators = await TranslatorModel.getTranslators(id)
            this.setState({
                manga: {
                    ...manga,
                    ...author,
                    // ...chapters,
                    ...tags,
                    ...translators
                },
                isLoaded: true
            },()=>console.log(this.state.manga))
        } catch (e) {

        }
    }

    render() {
        const {isLoaded, manga} = this.state
        return !isLoaded
            ? <CustomLoader/>
            : (
                <div>
                    <Description manga={manga}/>
                    <ChaptersTable manga={manga}/>
                </div>
            )
    }
}

export default UserManga
