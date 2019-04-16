import React from "react";
import Table from "../../../../componens/table";

class ChaptersTable extends React.Component {
    render() {
        return (
            <section className="hero is-fullheight is-default is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns is-vcentered">
                          <Table schema={[]} items={[]}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ChaptersTable
