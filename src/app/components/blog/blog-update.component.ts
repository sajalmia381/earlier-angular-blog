import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'app/shared/models/Post';

@Component({
    selector: 'app-blog-update',
    template: `
        <div class="modal-header">
            <h4 class="modal-title">Add New Post</h4>
            <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form (submit)=onSubmit($event)>
                <input type="hidden" name="id" value="post.id" />
                <input type="hidden" name="userId" value="post.userId" />
                <div class="form-group">
                    <input [(ngModel)]="post.title" name="title" type="text" class="form-control" id="title" placeholder="Title" required>
                </div>
                <div class="form-group">
                    <textarea [(ngModel)]="post.body" name="body" class="form-control" id="body" rows="5" placeholder="Body" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary px-4">Submit</button>
            </form>
        </div>
    `
})

export class BlogUpdateComponent implements OnInit {

    @Input() post: Post

    constructor(public activeModal:NgbActiveModal) { }

    ngOnInit() { }

    onSubmit(e) {

    }
}