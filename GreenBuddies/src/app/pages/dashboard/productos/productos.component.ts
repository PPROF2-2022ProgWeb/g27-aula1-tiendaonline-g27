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
  newProduct: IProduct = {
    id: null,
    nombre: null,
    descripcion: null,
    detalles: [],
    descuento: false,
    categoria: "",
    imagenes: [
      {
        id: 27,
        src: "https://via.placeholder.com/400x450.jpg?text=greenbuddies.vercel.app",
        alt: "Placeholder"
      }
    ],
    recomendacion: null,
    stock: 0,
    precio_con_descuento: 0,
    precio_sin_descuento: 0
  }

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
    const adaptedProduct = adaptProductFromFrontToAPI(product);
    this.productsService
      .updateProduct(adaptedProduct)
      .pipe(
        map(res => {
          console.log(res);
          if (res) {
            this.productsService.getAllProducts()
              .pipe(
                tap((response) => {
                  if (response) {
                    this.products = response;
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
  handleNewProduct(product: IProduct) {
    this.productsService
      .createProduct(adaptProductFromFrontToAPI(product))
      .pipe(
        map(res => {
          if (res) {
            this.productsService.getAllProducts()
              .pipe(
                tap((response) => {
                  if (response) {
                    this.products = adaptProducts(response);
                    this.isLoading = false;
                    window.location.reload();
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

  handleProductDelete(id: number | string) {
    this.productsService
      .deleteProduct(id)
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
    window.location.reload();
  }

}
