import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formGroup: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('sajal', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      number: new FormControl(null),
      message: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      notRobot: new FormControl(false, [Validators.required])
    })
  }
  onSubmit() {

    console.log(this.formGroup.value)
    if (this.formGroup.invalid) {
      return
    }
    console.log(this.formGroup.value)
    
  }
  // get name() {return this.form.get('name')}
}
