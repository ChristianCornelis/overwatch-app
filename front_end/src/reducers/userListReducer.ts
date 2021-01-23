import { mergeDeepRight } from 'ramda';
import { UserListActionTypes, ADD_USER, REMOVE_USER } from "../actions/userListActions";
import { User } from "../models/User";

interface UserListState {
    users: User[]
}

const defaultState: UserListState = {
    users: []
}

export const userListReducer = (
    state = defaultState,
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
        default:
            return state;
    }
}