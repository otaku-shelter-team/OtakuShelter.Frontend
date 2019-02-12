package customRedux.reducers

import customRedux.actions.UserActions
import customRedux.initialState
import customRedux.libs.changeState
import customRedux.models.State
import customRedux.models.User
import redux.RAction

fun userReducer(state: State = initialState(), action: RAction) = when (action) {
    is UserActions.ChangeName -> changeState<User, UserActions.ChangeName>(state, action) { item, newItem ->
        item.name = newItem.name
    }
    else -> state
}
