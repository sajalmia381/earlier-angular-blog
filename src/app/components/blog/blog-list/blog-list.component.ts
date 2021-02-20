import { BlogUpdateComponent } from "./../blog-update.component";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Post } from "app/shared/models/Post";
import { PostsStateService } from "app/shared/services/blogs-state.service";
import { takeWhile } from "rxjs/operators";
import { BlogAddComponent } from "../blog-add.component";

@Component({
    selector: "app-blog-list",
    templateUrl: "./blog-list.component.html",
    styleUrls: ["./blog-list.component.scss"]
})
export class BlogListComponent implements OnInit, OnDestroy {
    isAlive = true;
    blogs: Post[] = [];
    isLoading: any = false;
    isError: any = false;
    page = 1;
    pageSize: number = 12;

    constructor(private postStateService: PostsStateService, private router: Router, private modalService: NgbModal) {}

    ngOnInit(): void {
        this.fetchData();
    }

    ngOnDestroy(): void {
        this.isAlive = false;
    }

    fetchData() {
        const observer$ = this.postStateService.getPostList();
        const entities$ = observer$[0];
        const loading$ = observer$[1];
        const error$ = observer$[2];
        error$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
            this.isError = data;
        });
        loading$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
            this.isLoading = data;
        });
        entities$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
            this.blogs = data.sort((a, b) => b.id - a.id);
        });
    }

    routeDetails(id) {
        console.log(id);
        this.router.navigate(["blog", id]);
    }

    changePageSize(e) {
        this.pageSize = e.target.value;
    }

    openNewPostForm() {
        this.modalService.open(BlogAddComponent, { size: "lg" });
    }
    updatePostFormModal(post: Post) {
        console.log(post);
        const updateModalRef = this.modalService.open(BlogUpdateComponent, { size: "lg" });
        updateModalRef.componentInstance.post = post;
    }
}
