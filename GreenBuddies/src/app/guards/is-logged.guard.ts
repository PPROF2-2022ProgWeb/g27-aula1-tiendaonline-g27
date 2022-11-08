import { UserService } from 'src/app/services/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  //Prevent routes of login and register when user is already logged
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !this.isLogged();
  }

  isLogged(): boolean {
    if (this.userService.getUserSession()) {
      this.router.navigate(['perfil']);
      return true;
    } else {
      return false;
    }
  }
}
