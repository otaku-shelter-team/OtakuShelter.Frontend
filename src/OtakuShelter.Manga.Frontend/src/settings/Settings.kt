package settings

import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.div

class Settings : RComponent<Settings.IProps, Settings.IState>() {
    override fun RBuilder.render() {
        div { +"Settings" }
    }

    interface IProps : RProps
    interface IState : RState
}

fun RBuilder.settings() = child(Settings::class) {}