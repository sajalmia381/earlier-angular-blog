import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
    formGroup: FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            name: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            number: new FormControl(null),
            message: new FormControl(null, [Validators.required, Validators.minLength(10)]),
            notRobot: new FormControl(false, [Validators.required])
        });
    }

    onSubmit() {
        console.log(this.formGroup.value);
        if (this.formGroup.invalid) {
            console.log(this.formGroup.errors);
            return;
        }
        console.log(this.formGroup.value);
    }
    // get name() {return this.form.get('name')}
}
