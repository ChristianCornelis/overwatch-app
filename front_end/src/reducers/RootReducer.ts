import { createStore, combineReducers } from 'redux';
import { userListReducer } from "./userListReducer";

export const rootReducer = combineReducers({
    users: userListReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);