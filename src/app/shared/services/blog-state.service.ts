import { combineLatest, Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Post } from './../models/Post';
import { getPostLoaded, getPostLoading, getPosts, RootReducerState, getPostError } from "app/reducers";

import { BlogService } from "./blog.service";
import { take } from 'rxjs/operators';
import { PostListSucessAction } from 'app/actions/postAction';



@Injectable()
export class PostStateService {
    constructor(private blogService: BlogService, private store: Store<RootReducerState>) {}

    getPostList = (force = false): [Observable<Post[]>, Observable<Boolean>, Observable<Boolean>] => {
        const postLoaded$ = this.store.select(getPostLoaded)
        const postLoading$ = this.store.select(getPostLoading)
        const postError$ = this.store.select(getPostError)
        const getPosts$ = this.store.select(getPosts)
        combineLatest([postLoaded$, postLoading$]).pipe(take(1)).subscribe(data => {
            if((!data[0] && !data[1]) || force) {
                this.blogService.getBlogList().subscribe(posts => {
                    this.store.dispatch(new PostListSucessAction({posts}))
                })
            }
        })
        return [getPosts$, postLoading$, postError$]
    }
}