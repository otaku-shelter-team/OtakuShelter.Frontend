package dashboard

import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.div

class Dashboard : RComponent<Dashboard.IProps, Dashboard.IState>() {
    override fun RBuilder.render() {
        div { +"Dashboard" }
    }

    interface IProps : RProps
    interface IState : RState
}

fun RBuilder.dashboard() = child(Dashboard::class) {}