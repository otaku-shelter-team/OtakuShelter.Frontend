package customRedux.actions

import redux.RAction

class UserActions {
    data class ChangeName(val name: String) : RAction
}