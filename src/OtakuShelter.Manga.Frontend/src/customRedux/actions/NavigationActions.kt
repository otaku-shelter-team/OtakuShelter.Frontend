package customRedux.actions

import redux.RAction

class NavigationActions {
    data class ChangeMargin(val margin: Int) : RAction
    data class ChangeActiveItem(val item: String) : RAction
}