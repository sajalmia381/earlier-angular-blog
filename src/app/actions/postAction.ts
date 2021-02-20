export const POST_LIST_REQUEST = "POST_LIST_REQUEST";
export const POST_LIST_SUCCESS = "POST_LIST_SUCCESS";
export const POST_LIST_FAIL = "POST_LIST_FAIL";

export const POST_ADD = "POST_ADD";
export const POST_UPDATE = "POST_UPDATE";
export const POST_DELETE = "POST_DELETE";

import { Post } from "./../shared/models/Post";

export class PostListRequestAction {
    readonly type = POST_LIST_REQUEST;
}

export class PostListSucessAction {
    readonly type = POST_LIST_SUCCESS;
    constructor(public payload?: { posts: Post[] }) {}
}

export class PostListFail {
    readonly type = POST_LIST_FAIL;
}

export class PostDelete {
    readonly type = POST_DELETE;
    constructor(public payload?: { id: number }) {}
}

export class PostAdd {
    readonly type = POST_ADD;
    constructor(public payload?: { data }) {}
}
export class PostUpdate {
    readonly type = POST_UPDATE;
    constructor(public payload?: { data: Post }) {}
}
