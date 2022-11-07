import { adaptProducts } from 'src/app/adapters/products.adapter';
import { DOMAIN, PORT, PROTOCOL } from './infrastructure.properties';
import { IProduct } from './../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private API_GET_ALL_PRODUCTS = `${PROTOCOL}://${DOMAIN}:${PORT}/products`;
  private API_GET_PRODUCT_BY_ID = `${PROTOCOL}://${DOMAIN}:${PORT}/products/id`;

  constructor(public http: HttpClient) { }

  public getAllProducts(): Observable<any> {
    return this.http.get<any>(this.API_GET_ALL_PRODUCTS);
  }

  public getProductById(id: number | string ): Observable<any> {
    return this.http.get<any>(`${this.API_GET_PRODUCT_BY_ID}/${id}`);
  }

}
