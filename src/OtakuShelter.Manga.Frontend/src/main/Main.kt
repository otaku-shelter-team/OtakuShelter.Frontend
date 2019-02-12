package main

import dashboard.Dashboard
import manga.Manga
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.router.dom.redirect
import react.router.dom.route
import react.router.dom.switch
import settings.Settings

class Main : RComponent<RProps, RState>() {
    override fun RBuilder.render() {
        switch {
            route("/dashboard", Dashboard::class, exact = true)
            route("/manga", Manga::class, exact = true)
            route("/settings", Settings::class, exact = true)
            redirect("/", "/dashboard")
        }
    }
}

fun RBuilder.main() = child(Main::class) {}