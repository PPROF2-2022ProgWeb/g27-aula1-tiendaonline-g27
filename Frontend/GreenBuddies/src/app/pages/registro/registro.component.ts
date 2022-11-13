import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { saveSession, UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { hash } from 'src/app/utils/hash';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.compose([Validators.required, Validators.minLength(3),
        Validators.maxLength(14), Validators.pattern('[a-zA-Z]*')])]],
        lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(24),
        Validators.pattern('[a-zA-Z]*')]],
        password: ['', [Validators.compose([Validators.required, Validators.minLength(8),
        Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ]{8,}$')])]],
        email: ['', [Validators.compose([Validators.required, Validators.email])]],
        birthDate: ['', [Validators.required, Validators.min(1930), Validators.max(2004)]],
        country: ['{"id": 1,"name": "Argentina"}'],
        state: ['{"id": 1,"name": "Córdoba"}'],
        zipCode: ['{"id": 1,"code": "5000"}'],
      })
  }

  get name() {
    return this.form?.get('name');
  }

  get lastName() {
    return this.form?.get('lastName');
  }

  get password() {
    return this.form?.get('password');
  }

  get email() {
    return this.form?.get('email');
  }

  get birthDate() {
    return this.form?.get('birthDate');
  }

  get country() {
    return this.form?.get('country');
  }

  get state() {
    return this.form?.get('state');
  }

  get zipCode() {
    return this.form?.get('zipCode');
  }

  get emailValid() {
    return this.email?.touched && !this.email?.valid;
  }

  get passwordValid() {
    return this.password?.touched && !this.password?.valid;
  }

  async handleSignIn(e: Event) {
    e.preventDefault;
    
    if (this.form.valid) {
      const formattedForm = {
        ...this.form.value,
        password: await hash(this.form.value.password),
        country: JSON.parse(this.form.value.country),
        state: JSON.parse(this.form.value.state),
        zipCode: {id: 1,code: "5000"},
        role: {
          id: 1,
          roleName: "ROLE_USER"
        }
      };
      (await this.userService
        .register(formattedForm))
        .pipe(
          tap(res => {
            saveSession(formattedForm);
            this.router.navigate(["/"]);
          })
        )
        .subscribe();
      this.form.reset();
    }
    else {
      this.form.markAllAsTouched();
    }
  }

}