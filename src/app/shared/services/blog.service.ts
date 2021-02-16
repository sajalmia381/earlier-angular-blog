import { HttpService } from "./http.service";
import { Injectable, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Post, Comment } from "../models/Post";

@Injectable({
    providedIn: "root"
})
export class BlogService implements OnInit {
    constructor(private httpService: HttpService) {}
    ngOnInit(): void {}

    getBlogList() {
        return this.httpService.get("/posts").pipe(map(data => data as Post[]));
    }
    getBlogComment() {
        return this.httpService.get(`/posts/1/comments`).pipe(map(data => data as Comment[]));
    }
}
