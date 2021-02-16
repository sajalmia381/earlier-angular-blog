import { Component, OnDestroy, OnInit } from "@angular/core";
import { Post } from "app/shared/models/Post";
import { PostStateService } from "app/shared/services/blog-state.service";
import { takeWhile } from "rxjs/operators";

@Component({
    selector: "app-blog-list",
    templateUrl: "./blog-list.component.html",
    styleUrls: ["./blog-list.component.scss"]
})
export class BlogListComponent implements OnInit, OnDestroy {
    isAlive = true
    blogs: Post[] = [];
    isLoading = false
    isError = false

    constructor(private postStateService: PostStateService) {}

    ngOnInit(): void {
        this.fetchData()
    }

    ngOnDestroy(): void {
        this.isAlive = false
    }
    
    fetchData() {
        const observer = this.postStateService.getPostList()
        const entities$ = observer[0]
        const loading$ = observer[1]
        const error$ = observer[2]
        error$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
            console.log(typeof(this.isError))
            console.log(typeof(data))
            // this.isError = data
        })
        entities$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
            this.blogs = data
        })

    }

    
}
