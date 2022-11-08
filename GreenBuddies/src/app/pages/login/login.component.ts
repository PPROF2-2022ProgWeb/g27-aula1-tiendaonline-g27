import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string | undefined;
  
  formLogin: FormGroup = new FormGroup({});

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group(
      {
        email: ['', [Validators.compose([Validators.required, Validators.email])]],
        password: ['', [Validators.compose([Validators.required, Validators.minLength(8),
        Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ]{8,}$')])]]
      }
    )
  }

  get email() {
    return this.formLogin?.get('email');
  }

  get password() {
    return this.formLogin?.get('password');
  }

  get emailValid() {
    return this.email?.touched && !this.email?.valid;
  }

  get passwordValid() {
    return this.password?.touched && !this.password?.valid;
  }

  setError(message : string) {
    this.error = message;
    setTimeout(() => {
      this.error = undefined;
    }, 3000);
  }

  handleLogin() {
    console.log(this.formLogin);
    if (this.formLogin.valid) {
      this.userService
        .getUserByEmail(this.formLogin.value.email)
        .pipe(
          map(res => {
            if (res) {
              this.userService.login(res, this.formLogin.value.password)
                .then(response => {
                  if (response) {
                    this.router.navigate(["/"])
                  } else {
                    this.setError("Contraseña incorrecta");
                  }
                });
            } else {
              this.setError("Email no asociado a ningún usuario");
              return res;
            }
          })
        )
        .subscribe();
    }
  }

}
