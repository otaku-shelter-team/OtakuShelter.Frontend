package app

import main.main
import navigation.navigation
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.div
import react.router.dom.browserRouter

class App : RComponent<RProps, RState>() {
    override fun RBuilder.render() {
        browserRouter {
            div("app") {
                div {
                    navigation {

                    }
                }
                div {
                    main()
                }
            }
        }
    }
}

fun RBuilder.app() = child(App::class) {}
