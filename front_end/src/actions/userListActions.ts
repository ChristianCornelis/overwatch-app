export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";

interface UserAction {
    name: string
    id: string
}

interface AddUserAction {
    type: typeof ADD_USER
    payload: UserAction
}

interface RemoveUserAction{
    type: typeof REMOVE_USER
    payload: UserAction
}

export type UserListActionTypes = AddUserAction | RemoveUserAction;