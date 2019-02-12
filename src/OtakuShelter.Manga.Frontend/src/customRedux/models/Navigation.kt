package customRedux.models

data class Navigation(
        var items: List<NavigationItem>,
        var activeItem: String,
        var margin: Int
)

data class NavigationItem(
        val image: String?,
        val title: String
)