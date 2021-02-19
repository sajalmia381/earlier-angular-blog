import { createSelector } from '@ngrx/store';
import { StoreUtility } from 'app/utils/store-utility';
import { Action } from './../actions/index';
import { Post } from './../shared/models/Post';
import { POST_LIST_REQUEST, POST_LIST_SUCCESS, POST_LIST_FAIL } from './../actions/postAction';


export interface PostsReducerState {
    loaded?: boolean;
    loading?: boolean;
    error?: boolean;
    entities?: {[id: number]: Post};
    ids?: number[];
}

export const initialState: PostsReducerState = {
    loaded: false,
    loading: false,
    error: false,
    entities: {},
    ids: []
}

export const postsReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case POST_LIST_REQUEST: 
            return { ...state, error: false, loading: true }
        case POST_LIST_SUCCESS:
            const posts = action.payload.posts
            const obj = StoreUtility.normalize(posts)
            const newEntities = {...state.entities, ...obj}
            const ids = posts.map(post => post.id)
            const newIds = [...state.ids, ...ids]
            return { ...state, error: false, loaded: true, loading: false, entities: newEntities, ids: newIds }
        case POST_LIST_FAIL:
            return {...state, error: true, loading: false, loaded: false}
        default:
            return state
    }
}

// Selector Instance
export const getPostLoaded = (state: PostsReducerState) => state.loaded
export const getPostLoading = (state: PostsReducerState) => state.loading
export const getPostError = (state: PostsReducerState) => state.error
export const getPostEntities = (state: PostsReducerState) => state.entities
export const getPostIds = (state: PostsReducerState) => state.ids
export const getPosts = createSelector(getPostEntities, (entities) => StoreUtility.unnormalize(entities))