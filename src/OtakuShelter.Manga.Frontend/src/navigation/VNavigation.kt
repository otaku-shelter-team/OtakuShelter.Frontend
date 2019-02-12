package navigation

import customRedux.models.Navigation
import customRedux.models.User
import kotlinx.html.js.onClickFunction
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.*

@JsModule("src/assets/image/otaku.png")
external val logo: String?
@JsModule("src/assets/image/avatar.svg")
external val avatar: String?
@JsModule("src/assets/image/menu.svg")
external val menu: String?

class VNavigation : RComponent<VNavigation.IProps, RState>() {
    private fun onMenuClick() {
        this.props.setMargin(when (props.navigation.margin) {
            0 -> -150
            -150 -> 0
            else -> 0
        })
    }

    private fun onNavigationItemClick(newActiveItem: String) {
        this.props.setActiveNavigationItem(newActiveItem)
    }

    override fun RBuilder.render() {
        div("navigation") {
            attrs.jsStyle.marginLeft = props.navigation.margin
            div("navigation__header") {
                img("#", logo, "navigation__logo") { }
                img("#", menu, "navigation__menu") {
                    attrs {
                        onClickFunction = { onMenuClick() }

                    }
                }
            }
            div("navigation__content") {
                div("navigation__main") {
                    ul {
                        props.navigation.items.map {
                            navigationItem(
                                    NavigationItemProps(props.navigation.activeItem, ::onNavigationItemClick, it)
                            )
                        }
                    }
                }
                div("navigation__footer") {
                    div("navigation__avatar-container") {
                        div("navigation__avatar") {
                            attrs.jsStyle.marginLeft = when (props.navigation.margin) {
                                -150 -> 60
                                else -> props.navigation.margin
                            }
                            img("#", avatar, "navigation__avatar-image") { }
                        }
                        div("navigation__user") {
                            attrs.jsStyle.marginLeft = when (props.navigation.margin) {
                                -150 -> props.navigation.margin * 2
                                else -> props.navigation.margin
                            }
                            attrs.jsStyle.opacity = when (props.navigation.margin) {
                                -150 -> 0
                                else -> 1
                            }
                            strong { +props.user.name }
                            p { +props.user.role }
                        }
                    }
                }
            }
        }
    }

    interface IProps : IStateProps, IDispatchProps

    interface IStateProps : RProps {
        var user: User
        var navigation: Navigation
    }

    interface IDispatchProps : RProps {
        var setMargin: (marginValue: Int) -> Unit
        var setActiveNavigationItem: (itemName: String) -> Unit
    }
}