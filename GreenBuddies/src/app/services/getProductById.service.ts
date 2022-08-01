import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Product } from "../models/product.model";
//import { Observable } from "rxjs";

@Injectable({providedIn: "root"})

export class GetProductByIdService {
    //private API_GET_PRODUCT_BY_ID = "https://nuestra-api/producto/";
    
    constructor(public http:HttpClient) {}
    
    /* public getProductById(id: number):Observable<any> {
        this.API_GET_PRODUCT_BY_ID = `https://nuestra-api/producto/${id}`;
        return this.http.get<any>(this.API_GET_PRODUCT_BY_ID);
    } */

    // Simulación del endpoint
    public getProductById (products: Product[], id: number) {
        return products.filter(product => product.id == id)[0];
    }
}