import { adaptProduct } from 'src/app/adapters/products.adapter';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  public isLoading: boolean = true;
  public productDetails: IProduct = {
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
  public productId: number = 5;

  constructor(private router: ActivatedRoute,
    private productsService: ProductsService) { }


  ngOnInit(): void {
    this.router.params.subscribe((e) => {
      this.productId = parseInt(e["id"]);
      console.log("Id desde ngOninit:" + this.productId);
    });
    
    this.productsService
      .getProductById(this.productId)
      .pipe(
        tap((response) => {
          console.log("Id desde el consctructor:" + this.productId);
          this.productDetails = adaptProduct(response);
          this.isLoading = false;
          console.log(response);
          return adaptProduct(response);
        })
      )
      .subscribe();
  }

  ngOnChange(): void { }

}
