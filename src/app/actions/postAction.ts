export const POST_LIST_REQUEST = 'POST_LIST_REQUEST';
export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS';
export const POST_LIST_FAIL = 'POST_LIST_FAIL';

import { Post } from './../shared/models/Post';

export class PostListRequestAction {
    readonly type = POST_LIST_REQUEST
}

export class PostListSucessAction {
    readonly type = POST_LIST_SUCCESS
    constructor(public payload?: { posts: Post[] }) {}
}