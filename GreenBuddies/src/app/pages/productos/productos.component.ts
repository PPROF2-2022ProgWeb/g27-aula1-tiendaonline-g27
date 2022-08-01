import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { GetAllProductsService } from 'src/app/services/getAllProducts.service';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
    public isLoading: boolean = true;
    public productos = [
        {
            id: NaN,
            nombre: null,
            categoria: null,
            descripcion: null,
            descuento: false,
            detalles: [],
            imagenes: [
                {
                    src: "http://via.placeholder.com/640x360",
                    alt: "Placeholder"
                }
            ],
            precio_con_descuento: null,
            precio_sin_descuento: null,
            recomendacion: null,
            stock: null,
        }
    ]

    constructor(private getAllProductsService: GetAllProductsService) {
        this.getAllProductsService
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


