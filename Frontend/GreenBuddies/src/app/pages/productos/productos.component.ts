import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs';
import { adaptProducts } from 'src/app/adapters/products.adapter';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
    public isLoading: boolean = true;
    public productos: IProduct[] | undefined;
    public nameQuery: string | undefined;

    constructor(private productsService: ProductsService, private activatedRouter: ActivatedRoute, private router: Router) {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                this.activatedRouter.params.subscribe((e) => {
                    this.nameQuery = e["name"];
                });

                if (this.nameQuery) {
                    this.productos = undefined;
                    this.searchProducts();
                } else {
                    this.getAllProd();
                }
            });
    }

    ngOnInit(): void { }

    searchProducts() {
        if (this.nameQuery) {
            this.productsService
                .getProductsByName(this.nameQuery)
                .pipe(
                    tap((res) => {
                        this.isLoading = false;
                        if (res) {
                            this.productos = adaptProducts([res]);
                        } else this.productos = undefined;
                    }
                    )
                )
                .subscribe();
        }
    }

    getAllProd() {
        this.productsService
            .getAllProducts()
            .pipe(
                tap((response) => {
                    this.productos = adaptProducts(response);
                    this.isLoading = false;
                    return response;
                })
            )
            .subscribe();
    }
}
