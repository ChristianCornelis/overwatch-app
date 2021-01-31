import { createStore, combineReducers } from 'redux';

import { userListReducer, UserListState } from "./userListReducer";

export interface RootState {
    users: UserListState
}

export const rootReducer = combineReducers({
    users: userListReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);