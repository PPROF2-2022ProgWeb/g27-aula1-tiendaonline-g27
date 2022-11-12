import { UserService } from 'src/app/services/user.service';
import { adaptProductFromFrontToAPI, adaptProducts } from 'src/app/adapters/products.adapter';
import { IProduct } from 'src/app/models/product.model';
import { tap, map } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosAdminComponent implements OnInit {
  public isLoading: boolean = true;
  public products: IProduct[] | undefined;

  constructor(private productsService: ProductsService, private userService: UserService, private router: Router) {
    this.productsService
      .getAllProducts()
      .pipe(
        tap((response) => {
          this.products = adaptProducts(response);
          this.isLoading = false;
          return response;
        })
      )
      .subscribe();
  }

  ngOnInit(): void { }

  handleLogout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  handleProductEdit(product: IProduct) {
    console.log(product)
    console.log(adaptProductFromFrontToAPI(product));
    this.productsService
      .updateProduct(adaptProductFromFrontToAPI(product))
      .pipe(
        map(res => {
          if (res) {
            this.productsService.getAllProducts()
              .pipe(
                tap((response) => {
                  if (response) {
                    this.products = adaptProducts(response);
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


  }

}
