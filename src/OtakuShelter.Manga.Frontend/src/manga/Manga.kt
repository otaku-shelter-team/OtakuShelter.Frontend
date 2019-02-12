package manga

import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.div

class Manga : RComponent<Manga.IProps, Manga.IState>() {
    override fun RBuilder.render() {
        div { +"Manga" }
    }

    interface IState : RState
    interface IProps : RProps
}

fun RBuilder.manga() = child(Manga::class) {}