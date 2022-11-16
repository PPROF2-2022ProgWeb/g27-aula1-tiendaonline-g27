import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PROTOCOL, DOMAIN, PORT } from './infrastructure.properties';
import { Injectable } from "@angular/core";
import { IUser } from '../models/user.model';
import { hash } from '../utils/hash';
import { Router } from '@angular/router';

export function saveSession(user: IUser) {
    const userSession = {
        email: user.email,
        name: user.name,
        lastname: user.lastName,
        role: user.role.roleName
    }
    sessionStorage.setItem("green_buddies_user", JSON.stringify(userSession));
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

    constructor(public http: HttpClient, private router: Router) { }

    public getAllUsers(): Observable<any> {
        return this.http.get<any>(this.API_GET_ALL_USERS);
    }

    public getUserByEmail(email: string): Observable<any> {
        return this.http.get<any>(this.API_GET_USER_BY_EMAIL + email);
    }

    public deleteUserById(id: string): Observable<any> {
        return this.http.delete<any>(this.API_DELETE_USER_BY_ID + id);
    }

    public async login(user: IUser, password: string) {
        const hashPassword = await hash(password);
        if (user.password ===  hashPassword) {
            saveSession(user);
            return true;
        } else {
            return false;
        }
    }

    public logout() {
        sessionStorage.removeItem("green_buddies_user");
    }

    public async register(user: IUser) {
        return this.http.post(this.API_POST_USER, user)
    }

    public getUserSession() {
        const user = sessionStorage.getItem("green_buddies_user");
        if (user){
            return JSON.parse(user);
        } else {
            return null;
        }
    }

}
