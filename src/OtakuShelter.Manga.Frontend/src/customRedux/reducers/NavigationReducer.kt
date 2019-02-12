package customRedux.reducers

import customRedux.actions.NavigationActions
import customRedux.initialState
import customRedux.libs.changeState
import customRedux.models.Navigation
import customRedux.models.State
import redux.RAction


fun navigationReducer(state: State = initialState(), action: RAction) = when (action) {
    is NavigationActions.ChangeActiveItem -> changeState<Navigation, NavigationActions.ChangeActiveItem>(state, action) { item, newItem ->
        item.activeItem = newItem.item
    }
    is NavigationActions.ChangeMargin -> changeState<Navigation, NavigationActions.ChangeMargin>(state, action) { item, newItem ->
        item.margin = newItem.margin
    }
    else -> state
}
