import { createSelector } from "@ngrx/store";
import { StoreUtility } from "app/utils/store-utility";
import { Action } from "./../actions/index";
import { Post } from "./../shared/models/Post";
import { POST_LIST_REQUEST, POST_LIST_SUCCESS, POST_LIST_FAIL, POST_ADD, POST_UPDATE } from "./../actions/postAction";

export interface PostsReducerState {
    loaded?: boolean;
    loading?: boolean;
    error?: boolean;
    entities?: { [id: number]: Post };
    ids?: number[];
}

export const initialState: PostsReducerState = {
    loaded: false,
    loading: false,
    error: false,
    entities: {},
    ids: []
};

export const postsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case POST_LIST_REQUEST:
            return { ...state, error: false, loading: true };
        case POST_LIST_SUCCESS:
            const posts = action.payload.posts;
            const obj = StoreUtility.normalize(posts);
            const newEntities = { ...state.entities, ...obj };
            const ids = posts.map(post => post.id);
            const newIds = [...state.ids, ...ids];
            return { ...state, error: false, loaded: true, loading: false, entities: newEntities, ids: newIds };
        case POST_LIST_FAIL:
            return { ...state, error: true, loading: false, loaded: false };
        case POST_ADD: {
            // dummy post created, alternative as post as well
            const id = Math.max(...state.ids) + 1;
            const post: Post = { ...action.payload.data, id, userId: 1 };

            const entity = { [post.id]: post };
            const newEntitites = { ...state.entities, ...entity };
            const ids = StoreUtility.filterDublicatedIds([...state.ids, post.id]);
            return { ...state, entities: { ...newEntitites }, ids };
        }
        case POST_UPDATE: {
            const post = action.payload.data;
            console.log(post);
            const entity = { [post.id]: post };
            const entities = { ...state.entities, ...entity };
            return { ...state, entities: { ...entities } };
        }
        default:
            return state;
    }
};

// Selector Instance
export const getPostLoaded = (state: PostsReducerState) => state.loaded;
export const getPostLoading = (state: PostsReducerState) => state.loading;
export const getPostError = (state: PostsReducerState) => state.error;
export const getPostEntities = (state: PostsReducerState) => state.entities;
export const getPostIds = (state: PostsReducerState) => state.ids;
export const getPosts = createSelector(getPostEntities, entities => StoreUtility.unnormalize(entities));
