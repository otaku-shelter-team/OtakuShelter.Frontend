import React from "react";
import Table from "../../../../componens/table";
import PageModel from "../../../../models/PageModel";

class ChaptersTable extends React.Component {
    onClick = async (item) => {
        try {
            const response = await PageModel.getPages(item.id)
            console.log(response)
        } catch (e) {

        }
    }

    render() {
        const {manga} = this.props
        return (
            <section className="hero is-fullheight is-default is-bold">
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
