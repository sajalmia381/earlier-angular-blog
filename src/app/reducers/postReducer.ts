import { createSelector } from '@ngrx/store';
import { StoreUtility } from 'app/utils/store-utility';
import { Action } from './../actions/index';
import { Post } from './../shared/models/Post';
import { POST_LIST_REQUEST, POST_LIST_SUCCESS, POST_LIST_FAIL } from './../actions/postAction';


export interface PostReducerState {
    loaded?: boolean;
    loading?: boolean;
    error?: boolean;
    entities?: {[id: number]: Post};
    ids?: number[];
}

export const initialState: PostReducerState = {
    loaded: false,
    loading: false,
    error: false,
    entities: {},
    ids: []
}

export const postReducer = (state = initialState, action: Action) => {
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
            return {...state, error: true}
        default:
            return state
    }
}

// Selector Instance
export const getPostLoaded = (state: PostReducerState) => state.loaded
export const getPostLoading = (state: PostReducerState) => state.loading
export const getPostError = (state: PostReducerState) => state.loading
export const getPostEntities = (state: PostReducerState) => state.entities
export const getPostIds = (state: PostReducerState) => state.ids
export const getPosts = createSelector(getPostEntities, (entities) => StoreUtility.unnormalize(entities))