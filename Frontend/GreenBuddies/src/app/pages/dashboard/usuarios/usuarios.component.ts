import { tap, map } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosAdminComponent implements OnInit {
  public isLoading: boolean = true;
  public users: IUser[] | undefined;

  constructor(private userService: UserService, private router: Router) {
    this.userService
      .getAllUsers()
      .pipe(
        tap((res) => {
          this.users = res.reverse();
          this.isLoading = false;
        })
      )
      .subscribe();
  }

  ngOnInit(): void { }

  handleLogout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  handleUserDelete(id: string) {
    this.userService
      .deleteUserById(id)
      .pipe(
        map(res => {
          if (res) {
            this.userService.getAllUsers()
              .pipe(
                tap((response) => {
                  if (response) {
                    this.users = res.reverse();
                    this.isLoading = false;
                    return response;
                  } else {
                    return response;
                  }
                }))
          }
        })
      )
      .subscribe();
    window.location.reload();
  }

}
