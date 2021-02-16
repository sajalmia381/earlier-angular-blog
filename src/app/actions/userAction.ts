import { User } from "app/shared/models/User";

export const USER_LIST_REQUEST = "USER_LIST_REQUEST";
export const USER_LIST_SUCCESS = "USER_LIST_SUCCESS";
export const USER_LIST_FAIL = "USER_LIST_FAIL";
export const USER_DELETE = "USER_DELETE"

export class UserListRequestAction {
    readonly type = USER_LIST_REQUEST;
}

export class UserListSuccessAction {
    readonly type = USER_LIST_SUCCESS;
    constructor(public payload?: { users: User[] }) {}
}

export class UserListFail {
    readonly type = USER_LIST_FAIL
}

export class UserDeleteAction {
    readonly type = USER_DELETE
    constructor(public payload?: {id}) {}
}