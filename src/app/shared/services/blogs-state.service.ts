import { combineLatest, Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Post } from '../models/Post';
import { getPostsLoaded, getPostsLoading, getPosts, RootReducerState, getPostsError, getPostById } from "app/reducers";

import { BlogService } from "./blog.service";
import { take } from 'rxjs/operators';
import { PostListFail, PostListRequestAction, PostListSucessAction } from 'app/actions/postAction';


@Injectable()
export class PostsStateService {
    constructor(private blogService: BlogService, private store: Store<RootReducerState>) {}

    getPostList = (force = false): [Observable<Post[]>, Observable<Boolean>, Observable<Boolean>] => {
        const postLoaded$ = this.store.select(getPostsLoaded)
        const postLoading$ = this.store.select(getPostsLoading)
        const postError$ = this.store.select(getPostsError)
        const getPosts$ = this.store.select(getPosts)
        combineLatest([postLoaded$, postLoading$]).pipe(take(1)).subscribe(data => {
            if((!data[0] && !data[1]) || force) {
                this.store.dispatch(new PostListRequestAction())
                this.blogService.getBlogList().subscribe(posts => {
                    this.store.dispatch(new PostListSucessAction({posts}))
                }, (error) => {
                    this.store.dispatch(new PostListFail)
                })
            }
        })
        return [getPosts$, postLoading$, postError$]
    }
    
    getPost = (id: number, force = false) => {
        const post$ = this.store.select(state => getPostById(state, id))
        post$.pipe(take(1)).subscribe(data => {
            if (force || !data ) {
                return this.blogService.getBlog(id).subscribe(res => res)
            }
            return data
        })
    }
}