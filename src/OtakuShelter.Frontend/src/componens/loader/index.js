import React from "react";
import Loader from "react-loader-spinner";

const arr = [
    "Circles",
    "Grid",
    "Rings",
    "Watch",
    "Triangle",
    "Plane"
]

function random(max) {
    return Math.round(-0.5 + Math.random() * (max + 1));
}

class CustomLoader extends React.Component {
    loaderName = arr[random(arr.length - 1)]

    render() {
        return <section className="hero is-fullheight">
            <div style={{margin: "auto"}} className="hero-body">
                <Loader
                    type={this.loaderName}
                    color="#bdbdbd"
                    height="100"
                    width="100"
                />
            </div>
        </section>
    }
}

export default CustomLoader
