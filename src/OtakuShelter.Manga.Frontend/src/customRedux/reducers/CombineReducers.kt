package customRedux.reducers

import customRedux.models.State
import redux.RAction
import redux.Reducer
import redux.combineReducers

fun reducers() = combineReducers<State, RAction>(
        mapOf<String, Reducer<State, RAction>>(
                "user" to ::userReducer,
                "navigation" to ::navigationReducer
        )
)
