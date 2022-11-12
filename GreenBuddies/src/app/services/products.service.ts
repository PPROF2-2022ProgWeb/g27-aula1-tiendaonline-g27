import { IApiProduct } from './../models/product.model';
import { DOMAIN, PORT, PROTOCOL } from './infrastructure.properties';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private API_GET_ALL_PRODUCTS = `${PROTOCOL}://${DOMAIN}:${PORT}/products`;
  private API_GET_PRODUCT_BY_ID = `${PROTOCOL}://${DOMAIN}:${PORT}/products/id`;
  private API_POST_PRODUCT = `${PROTOCOL}://${DOMAIN}:${PORT}/products/save`;
  private API_PUT_PRODUCT = `${PROTOCOL}://${DOMAIN}:${PORT}/products/update`;
  private API_DELETE_PRODUCT = `${PROTOCOL}://${DOMAIN}:${PORT}/products/delete`;

  constructor(public http: HttpClient) { }

  public getAllProducts(): Observable<any> {
    return this.http.get<any>(this.API_GET_ALL_PRODUCTS);
  }

  public getProductById(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.API_GET_PRODUCT_BY_ID}/${id}`);
  }

  public createProduct(product: IApiProduct): Observable<any> {
    return this.http.post<any>(this.API_POST_PRODUCT, product);
  }

  public updateProduct(product: IApiProduct): Observable<any> {
    return this.http.put(this.API_PUT_PRODUCT, product);
  }

  public deleteProduct(id: number | string): Observable<any> {
    return this.http.delete(`${this.API_DELETE_PRODUCT}/${id}`);
  }

}
