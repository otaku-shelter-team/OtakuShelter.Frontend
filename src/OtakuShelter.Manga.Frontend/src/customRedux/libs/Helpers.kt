package customRedux.libs

import customRedux.models.State
import kotlinext.js.clone
import redux.RAction

fun <S : Any, A : RAction> changeState(state: State, action: RAction, function: (S, A) -> Unit): State {
    return clone(state.unsafeCast<S>())
            .also { function(it, action.unsafeCast<A>()) }
            .unsafeCast<State>()
}