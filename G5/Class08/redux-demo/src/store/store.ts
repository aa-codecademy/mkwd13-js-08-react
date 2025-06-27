import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { todosReducer } from "./reducers/todosReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const composeEnhancers = composeWithDevTools({});

// NOTE: This is valid if we have only 1 reducer in the app.
// export type RootState = ReturnType<typeof counterReducer>;
// export const store = createStore(counterReducer, composeEnhancers());

// The approach when we have more then 1 reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, {}, composeEnhancers());
