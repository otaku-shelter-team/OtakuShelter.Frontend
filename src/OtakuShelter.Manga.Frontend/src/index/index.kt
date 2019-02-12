package index

import app.app
import customRedux.store
import kotlinext.js.require
import kotlinext.js.requireAll
import react.dom.render
import react.redux.provider
import kotlin.browser.document

fun main() {
    requireAll(require.context("src", true, js("/\\.scss$/")))

    render(document.getElementById("root")) {
        provider(store) {
            app()
        }
    }
}
