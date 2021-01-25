import { mergeDeepRight } from 'ramda';
import { UserListActionTypes, ADD_USER, REMOVE_USER, GET_USERS } from "../actions/userListActions";
import { User } from "../models/User";
import { RootState } from './RootReducer';

export interface UserListState {
    users: User[]
}

//TODO: Remove dis - temporary
const defaultStateNoApi: UserListState = {
    users: [
        {
            name: "Chist",
            id: "7174"
        },
        {
            name: "Linther",
            id: "558"
        },
        {
            name: "Jurgap",
            id: "3149"
        }
    ]
}
const defaultState: UserListState = {
    users: []
}

export const userListReducer = (
    state = defaultStateNoApi,
    action: UserListActionTypes
): UserListState => {
    switch (action.type)
    {
        case ADD_USER:
            return { users: mergeDeepRight(
                state.users,
                [action.payload]) as User[]
            };
        case REMOVE_USER:
            return {
               users: state.users.filter(
                    u => u.name !== action.payload.name && u.id != action.payload.id)
               };
        case GET_USERS:
            console.log("YELLING");
            return {
                users: state.users
            }
        default:
            return state;
    }
}
/**
 * Kicks back the entire users slice of the redux store - careful with this one
 * @param state The root state of the application
 * @returns The entire UserListState slice of the store
 */
export const getUsers = (state: RootState): UserListState => state.users;