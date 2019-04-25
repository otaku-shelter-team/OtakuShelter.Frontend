import React from "react";
import Table from "../../../../componens/table";
import PageModel from "../../../../models/PageModel";
import ChapterModelView from "./chapterModalView";

class ChaptersTable extends React.Component {
    state = {
        isChapterModal: false,
        pages: []
    }

    onClick = async (item) => {
        try {
            const response = await PageModel.getPages(item.id)
            this.setState({
                isChapterModal: true,
                pages: response
            })
        } catch (e) {

        }
    }

    onModalClose = () => {
        this.setState({
            isChapterModal: false,
            pages: []
        })
    }

    render() {
        const {manga} = this.props
        const {isChapterModal, pages} = this.state
        return (
            <section className="hero is-fullheight is-default is-bold">
                {isChapterModal && <ChapterModelView chapters={manga.chapters} pages={pages} onModalClose={this.onModalClose}/>}
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <Table
                            schema={[
                                {
                                    name: 'Chapter',
                                    template: (chapter) => chapter.title,
                                    className: 'is-5'
                                }, {
                                    name: 'Date',
                                    template: (chapter) => chapter.uploadDate,
                                    className: 'is-7'
                                }
                            ]}
                            onClick={this.onClick}
                            items={manga.chapters}>
                        </Table>
                    </div>
                </div>
            </section>
        )
    }
}

export default ChaptersTable
