import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { PostsStateService } from "app/shared/services/blogs-state.service";

@Component({
    selector: "app-blog-add",
    template: `
        <div class="modal-header">
            <h4 class="modal-title">Add New Post</h4>
            <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <ngb-alert *ngIf="formSubmitSuccess" [type]="'info'">
                <strong>Successfull!</strong> Post is added
            </ngb-alert>

            <form [formGroup]="postFormGroup" (submit)="onSubmit()">
                <div class="form-group">
                    <input
                        [ngClass]="{ 'is-invalid': title.touched && title.invalid }"
                        [formControlName]="'title'"
                        type="text"
                        class="form-control"
                        id="title"
                        placeholder="Title"
                    />
                    <div *ngIf="title.touched && title.invalid" class="invalid-feedback">This field is required</div>
                </div>
                <div class="form-group">
                    <textarea
                        [ngClass]="{ 'is-invalid': body.touched && body.invalid }"
                        [formControlName]="'body'"
                        class="form-control"
                        id="body"
                        rows="5"
                        placeholder="Body"
                        required
                    ></textarea>
                    <div *ngIf="body.touched && body.invalid" class="invalid-feedback">This field is required</div>
                </div>
                <button [disabled]="postFormGroup.invalid" type="submit" class="btn btn-primary px-4">Submit</button>
            </form>
        </div>
    `
})
export class BlogAddComponent implements OnInit {
    postFormGroup: FormGroup;
    formSubmitSuccess = false;
    constructor(public activeModal: NgbActiveModal, private postStateService: PostsStateService) {}

    ngOnInit() {
        this.postFormGroup = new FormGroup({
            title: new FormControl(null, [Validators.required]),
            body: new FormControl(null, [Validators.required])
        });
    }
    get title() {
        return this.postFormGroup.get("title");
    }
    get body() {
        return this.postFormGroup.get("body");
    }
    onSubmit() {
        if (this.postFormGroup.invalid) {
            return;
        }
        this.postStateService.addPost({ ...this.postFormGroup.value });
        this.formSubmitSuccess = true;
        this.postFormGroup.reset();

        setTimeout(() => {
            if (this.formSubmitSuccess) {
                this.formSubmitSuccess = false;
            }
        }, 2000);
    }
}
