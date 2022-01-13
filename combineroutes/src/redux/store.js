import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { authReducer } from "./Auth/reducer"
import { reducer } from './Todos/reducer'

const rootReducer = combineReducers({
    authReducer: authReducer,
    todoReducer: reducer,
})

const logger = (state) => (next) => (action) => {
    console.log("Action", action, next, state);
    
    const val = next(action);

    return val;
}

const logger2 = (state) => (next) => (action) => {
    console.log("Logger2", action, next, state);

    const val = next(action);
    return val;
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancers = composeEnhancers(applyMiddleware(logger, logger2))


export const store = createStore(
    rootReducer,
    enhancers
)