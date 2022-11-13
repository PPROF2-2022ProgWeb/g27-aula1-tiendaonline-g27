import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../models/product.model';
import { IUser } from '../models/user.model';

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

export class CartService {

  cart: IProduct[] | undefined 

  constructor( private http: HttpClient, private router:Router) { }

  addToCart(product: IProduct){localStorage.setItem("gb-cart", product.toString()); window.alert("Hello world!");};
  removeFromCart(product: IProduct){localStorage.removeItem("gb-cart")};
  getCartItems(){return JSON.parse(localStorage.getItem("gb-cart")|| "[]")};


}
