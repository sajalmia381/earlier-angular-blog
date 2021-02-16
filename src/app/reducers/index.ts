import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromUserReducer from "./userReducer";
import * as fromPostReducer from './postReducer';
import { StoreUtility } from "app/utils/store-utility";

export interface RootReducerState {
    users: fromUserReducer.UserReducerState;
    posts: fromPostReducer.PostReducerState;
}

export const rootReducers: ActionReducerMap<RootReducerState> = {
    users: fromUserReducer.userReducer,
    posts: fromPostReducer.postReducer
};

// User Selectors
export const getUserState = (state: RootReducerState) => state.users;
export const getUserLoaded = createSelector(getUserState, fromUserReducer.getUserLoaded);
export const getUserLoading = createSelector(getUserState, fromUserReducer.getUserLoading);
export const getUsers = createSelector(getUserState, fromUserReducer.getUsers);
export const getUserError = createSelector(getUserState, fromUserReducer.getUserError)

// Post Selectors
export const getPostState = (state: RootReducerState) => state.posts
export const getPostLoading = createSelector(getPostState, fromPostReducer.getPostLoading)
export const getPostLoaded = createSelector(getPostState, fromPostReducer.getPostLoaded)
export const getPostEntities = createSelector(getPostState, fromPostReducer.getPostEntities)
export const getPostIds = createSelector(getPostState, fromPostReducer.getPostIds)
export const getPostError = createSelector(getPostState, fromPostReducer.getPostError)
export const getPosts = createSelector(getPostEntities, fromPostReducer.getPosts)