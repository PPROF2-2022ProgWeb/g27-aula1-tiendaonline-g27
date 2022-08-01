import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { GetAllProductsService } from 'src/app/services/getAllProducts.service';
import { GetProductByIdService } from 'src/app/services/getProductById.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  public isLoading : boolean = true;
  public productDetails : Product = {
    id: NaN,
    nombre: null,
    categoria: null,
    descripcion: null,
    descuento: false,
    detalles: [],
    imagenes: [],
    precio_con_descuento: null,
    precio_sin_descuento: null,
    recomendacion: null,
    stock: null,
  };
  
  constructor(private router: ActivatedRoute,
    private getAllProductsService: GetAllProductsService,
    private getProductByIdService: GetProductByIdService) {
    this.getAllProductsService
      .getAllProducts()
      .pipe(
        tap((response) => {
          this.productDetails = this.getProductByIdService.getProductById(
            response.record,
            this.productId
          );
          this.isLoading = false;
          return response.record;
        })
      )
      .subscribe();
  }

  public productId: number = 0;

  ngOnInit(): void {
    this.router.params.subscribe((e) => {
      this.productId = parseInt(e['id']);
    });
  }

}
