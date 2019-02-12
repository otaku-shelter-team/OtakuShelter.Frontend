package customRedux

import customRedux.models.Navigation
import customRedux.models.NavigationItem
import customRedux.models.State
import customRedux.models.User
import customRedux.reducers.reducers
import redux.createStore
import redux.rEnhancer

@JsModule("src/assets/image/settings.svg")
external val settings: String?
@JsModule("src/assets/image/dashboard.svg")
external val dashboard: String?
@JsModule("src/assets/image/book.svg")
external val manga: String?

fun initialState() = State(
        User("1", "Ilya Osadchiy", "Administrator"),
        Navigation(listOf(
                NavigationItem(dashboard, "dashboard"),
                NavigationItem(manga, "manga"),
                NavigationItem(settings, "settings")
        ), "dashboard", 0)
)

val store = createStore(
        reducers(),
        initialState(),
        rEnhancer()
)
