import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PROTOCOL, DOMAIN, PORT } from './infrastructure.properties';
import { Injectable } from "@angular/core";
import { IUser } from '../models/user.model';

async function hash(string : string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private API_GET_ALL_USERS = `${PROTOCOL}://${DOMAIN}:${PORT}/users`;
    private API_GET_USER_BY_EMAIL = `${PROTOCOL}://${DOMAIN}:${PORT}/users/`;
    private API_DELETE_USER_BY_ID = `${PROTOCOL}://${DOMAIN}:${PORT}/users/delete/`;
    private API_PUT_USER_UPDATE_BY_ID = `${PROTOCOL}://${DOMAIN}:${PORT}/users/update/`;
    private API_POST_USER = `${PROTOCOL}://${DOMAIN}:${PORT}/users/save/`;

    constructor(public http: HttpClient) { }

    public getAllUsers(): Observable<any> {
        return this.http.get<any>(this.API_GET_ALL_USERS);
    }
    
    public getUserByEmail(email: string) : Observable<any> {
        return this.http.get<any>(this.API_GET_USER_BY_EMAIL + email);
    }

    public async login(user : IUser, password: string) {
        /* const hashPassword = await hash(password); */
        if (user.password === password /* hashPassword */) {
            const userSession = {
                id: user.id,
                email: user.email,
                name: user.name,
                user: user.lastName,
                role: user.role.roleName
            }
            sessionStorage.setItem("green_buddies_user", userSession.toString());
            return true;
        } else {
            return false;
        }
    }

    public logout() {
        sessionStorage.removeItem("green_buddies_user");
    }

}
