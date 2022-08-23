import { IProduct } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
    public isLoading: boolean = true;
    public productos : IProduct[] | undefined;

    constructor(private productsService: ProductsService) {
        this.productsService
            .getAllProducts()
            .pipe(
                tap((response) => {
                    this.productos = response.record;
                    this.isLoading = false;
                    return response.record;
                })
            )
            .subscribe();
    }

    ngOnInit(): void { }
}


