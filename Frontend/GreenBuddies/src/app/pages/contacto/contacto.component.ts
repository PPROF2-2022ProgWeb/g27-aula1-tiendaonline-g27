import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.compose([Validators.required, Validators.minLength(3),
        Validators.maxLength(14), Validators.pattern('[a-zA-Z]*')])]],
        lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(24),
        Validators.pattern('[a-zA-Z]*')]],
        email: ['', [Validators.compose([Validators.required, Validators.email])]],

      })
  }

  get name() {
    return this.form?.get('name');
  }

  get nameValid() {
    return this.name?.touched && !this.name?.valid;
  }

  get lastName() {
    return this.form?.get('lastName');
  }

  get lastNameValid() {
    return this.lastName?.touched && !this.lastName?.valid;
  }

  get email() {
    return this.form?.get('email');
  }

  get emailValid() {
    return this.email?.touched && !this.email?.valid;
  }

  onEnviar(event: Event) {

    event.preventDefault;

    if (this.form.valid) {
      
      alert("Su mensaje ha sido enviado")
    }
    else {

      this.form.markAllAsTouched();

    }

  }


}
