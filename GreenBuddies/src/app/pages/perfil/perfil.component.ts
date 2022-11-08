import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  userActive = {
    email: "",
    name: "",
    lastname: "",
    role: ""
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userActive = this.userService.getUserSession();
    if (this.userActive.role === "ROLE_ADMIN") {
      this.router.navigate(["/admin"])
    }
  }

  handleLogout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
