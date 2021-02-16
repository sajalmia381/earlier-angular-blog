import { Action } from "./../actions";
import { User } from "app/shared/models/User";
import { USER_LIST_REQUEST, USER_LIST_FAIL, USER_LIST_SUCCESS, USER_DELETE } from "app/actions/userAction";

export interface UserReducerState {
    loaded?: boolean;
    loading?: boolean;
    users?: User[];
    error?: boolean;
}

const initialState: UserReducerState = {
    loaded: false,
    loading: false,
    error: false,
    users: []
};

export const userReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { ...state, loading: true };
        case USER_LIST_SUCCESS:
            const updatedUsers = state.users.concat(action.payload.users);
            return { ...state, loading: false, loaded: true, users: updatedUsers, error: false };
        case USER_LIST_FAIL:
            return { ...state, loading: false, loaded: false, error: true};

        case USER_DELETE:
            const users = state.users.filter(user => user.id !== action.payload.id)
            return { ...state, users }
        default:
            return state;
    }
};

export const getUserLoading = (state: UserReducerState) => state.loading;
export const getUserLoaded = (state: UserReducerState) => state.loaded;
export const getUsers = (state: UserReducerState) => state.users;
export const getUserError = (state: UserReducerState) => state.error