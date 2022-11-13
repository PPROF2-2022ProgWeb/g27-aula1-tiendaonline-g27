import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  

  cart: IProduct[] | unknown; 
productos: any;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    
    this.cartService
      .getCartItems()
      .pipe(tap((res) => {this.cart= res}))

  }
  
}
