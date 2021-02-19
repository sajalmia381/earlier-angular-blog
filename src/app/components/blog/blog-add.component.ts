import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-blog-add',
    template: `
    <div class="modal-header">
        <h4 class="modal-title">Add New Post</h4>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <form (submit)=onSubmit($event)>
            <div class="form-group">
                <input [(ngModel)]="formData.title" name="title" type="text" class="form-control" id="title" placeholder="Title" required>
            </div>
            <div class="form-group">
                <textarea [(ngModel)]="formData.body" name="body" class="form-control" id="body" rows="5" placeholder="Body" required></textarea>
            </div>
            {{formData.title}} {{formData.body}} 
            <button type="submit" class="btn btn-primary px-4">Submit</button>
        </form>
    </div>
    `
})

export class BlogAddComponent implements OnInit {
    formData = {
        title: '',
        body: ''
    }
    constructor(public activeModal: NgbActiveModal) { }

    ngOnInit() { }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.formData)
    }
}