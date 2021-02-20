import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, Input, OnInit } from "@angular/core";
import { Post } from "app/shared/models/Post";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PostsStateService } from "app/shared/services/blogs-state.service";

@Component({
    selector: "app-blog-update",
    template: `
        <div class="modal-header">
            <h4 class="modal-title">Add New Post</h4>
            <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form [formGroup]="updateFormGroup" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <input
                        [ngClass]="{
                            'is-invalid': updateFormGroup.get('title').touched && updateFormGroup.get('title').invalid
                        }"
                        [formControlName]="'title'"
                        type="text"
                        class="form-control"
                        id="title"
                        placeholder="Title"
                        required
                    />
                </div>
                <div class="form-group">
                    <textarea
                        [ngClass]="{
                            'is-invalid': updateFormGroup.get('body').touched && updateFormGroup.get('body').invalid
                        }"
                        [formControlName]="'body'"
                        class="form-control"
                        id="body"
                        rows="5"
                        placeholder="Body"
                        required
                    ></textarea>
                </div>
                <button [disabled]="updateFormGroup.invalid" type="submit" class="btn btn-primary px-4">Update</button>
            </form>
        </div>
    `
})
export class BlogUpdateComponent implements OnInit {
    @Input() post: Post;

    updateFormGroup: FormGroup;

    constructor(public activeModal: NgbActiveModal, private postStateService: PostsStateService) {}

    ngOnInit() {
        this.updateFormGroup = new FormGroup({
            title: new FormControl(this.post.title ? this.post.title : null, [Validators.required]),
            body: new FormControl(this.post.body ? this.post.body : null, [Validators.required])
        });
    }

    onSubmit() {
        if (this.updateFormGroup.invalid) {
            alert("form not valid");
            return;
        }
        const formData = { ...this.post, ...this.updateFormGroup.value };
        this.postStateService.updatePost({ ...formData });
        this.updateFormGroup.reset();
        this.activeModal.close();
    }
}
