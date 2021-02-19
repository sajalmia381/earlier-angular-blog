import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromUserReducer from "./userReducer";
import * as fromPostsReducer from "./postReducer";

export interface RootReducerState {
    users: fromUserReducer.UserReducerState;
    posts: fromPostsReducer.PostsReducerState;
}

export const rootReducers: ActionReducerMap<RootReducerState> = {
    users: fromUserReducer.userReducer,
    posts: fromPostsReducer.postsReducer
};

// Users Selectors
export const getUserState = (state: RootReducerState) => state.users;
export const getUserLoaded = createSelector(getUserState, fromUserReducer.getUserLoaded);
export const getUserLoading = createSelector(getUserState, fromUserReducer.getUserLoading);
export const getUsers = createSelector(getUserState, fromUserReducer.getUsers);
export const getUserError = createSelector(getUserState, fromUserReducer.getUserError);

// Posts Selectors
export const getPostsState = (state: RootReducerState) => state.posts;
export const getPostsLoading = createSelector(getPostsState, fromPostsReducer.getPostLoading);
export const getPostsLoaded = createSelector(getPostsState, fromPostsReducer.getPostLoaded);
export const getPostsEntities = createSelector(getPostsState, fromPostsReducer.getPostEntities);
export const getPostsIds = createSelector(getPostsState, fromPostsReducer.getPostIds);
export const getPostsError = createSelector(getPostsState, fromPostsReducer.getPostError);
export const getPosts = createSelector(getPostsState, fromPostsReducer.getPosts);

export const getPostById = (state: RootReducerState, id: number) => {
    const entities = getPostsEntities(state);
    return entities[id];
};
