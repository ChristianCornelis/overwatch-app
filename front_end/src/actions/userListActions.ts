export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const GET_USERS = "GET_USERS";

export interface UserListAction {
    name: string
    id: string
}

interface AddUserAction {
    type: typeof ADD_USER
    payload: UserListAction
}

interface RemoveUserAction{
    type: typeof REMOVE_USER
    payload: UserListAction
}

interface GetUsersAction {
    type: typeof GET_USERS
}

export type UserListActionTypes = AddUserAction | RemoveUserAction | GetUsersAction;