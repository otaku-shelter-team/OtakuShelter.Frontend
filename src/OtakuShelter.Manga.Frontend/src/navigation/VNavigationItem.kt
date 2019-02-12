package navigation

import customRedux.models.NavigationItem
import kotlinx.html.js.onClickFunction
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.img
import react.dom.li
import react.dom.strong
import react.router.dom.navLink

class VNavigationItem(props: IProps) : RComponent<VNavigationItem.IProps, RState>(props) {
    private fun onNavigationItemClick(item: String) = this.props.onNavigationItemClick(item)

    override fun RBuilder.render() {
        navLink(props.item.title) {
            li("navigation__item ${when (props.item.title == props.activeNavigationItem) {
                true -> "navigation__item-active"
                else -> ""
            }}") {
                attrs {
                    onClickFunction = { onNavigationItemClick(props.activeNavigationItem) }
                }
                strong { +props.item.title }
                img("#", props.item.image, "navigation__item-image") { }
            }
        }
    }

    interface IProps : RProps {
        var activeNavigationItem: String
        var item: NavigationItem
        var onNavigationItemClick: (newActiveItem: String) -> Unit
    }
}

data class NavigationItemProps(
        override var activeNavigationItem: String,
        override var onNavigationItemClick: (newActiveItem: String) -> Unit,
        override var item: NavigationItem
) : VNavigationItem.IProps

fun RBuilder.navigationItem(props: VNavigationItem.IProps) = child(VNavigationItem::class) {
    attrs.activeNavigationItem = props.activeNavigationItem
    attrs.item = props.item
    attrs.onNavigationItemClick = props.onNavigationItemClick
}