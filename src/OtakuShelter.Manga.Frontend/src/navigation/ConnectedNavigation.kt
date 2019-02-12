package navigation

import customRedux.actions.NavigationActions
import customRedux.actions.UserActions
import customRedux.models.State
import react.RClass
import react.invoke
import react.redux.rConnect
import redux.RAction

val mapStateToProps: VNavigation.IStateProps.(State, VNavigation.IStateProps) -> Unit = { state, props ->
    user = state.user
    navigation = state.navigation
}

val mapDispatchToProps: VNavigation.IDispatchProps.((RAction) -> UserActions.ChangeName, VNavigation.IProps) -> Unit = { dispatch, props ->
    setMargin = {
        dispatch(NavigationActions.ChangeMargin(it))
    }
    setActiveNavigationItem = {
        dispatch(NavigationActions.ChangeActiveItem(it))
    }
}

val navigation: RClass<VNavigation.IProps> = rConnect<
        State,
        RAction,
        UserActions.ChangeName,
        VNavigation.IProps,
        VNavigation.IStateProps,
        VNavigation.IDispatchProps,
        VNavigation.IProps>(mapStateToProps, mapDispatchToProps)(VNavigation::class.js.unsafeCast<RClass<VNavigation.IProps>>())
