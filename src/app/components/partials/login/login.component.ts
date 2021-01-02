import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from './user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {

    // the short way
    this.myForm = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(6)]],
      address: this._fb.group({
        street: ['', <any>Validators.required],
        // postcode: ['']
      })
    });

    // subscribe to form changes
    this.subcribeToFormChanges();

    // Update single value
    (<FormControl>this.myForm.controls['name'])
      .setValue('John', { onlySelf: true });

    // (<FormGroup>this.myForm)
    //     .setValue(people, { onlySelf: true });
  }

  subcribeToFormChanges() {
    const myFormStatusChanges$ = this.myForm.statusChanges;
    const myFormValueChanges$ = this.myForm.valueChanges;

    myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }

  save(model: User, isValid: boolean) {
    this.submitted = true;
    console.log(model, isValid);
  }

}
