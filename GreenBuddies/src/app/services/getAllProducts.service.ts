import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http"

@Injectable({providedIn: "root"})

export class GetAllProductsService {
    private API_GET_ALL_PRODUCTS = "https://api.jsonbin.io/v3/b/62e534f160c3536f3fc96d65/latest";

    constructor(public http:HttpClient) {}
    
    public getAllProducts():Observable<any> {
        return this.http.get<any>(this.API_GET_ALL_PRODUCTS);
    }
}