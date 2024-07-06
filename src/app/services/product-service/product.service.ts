import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interfaces/product';
import { ProductDbResponse } from '../../interfaces/productDbResponse';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = "http://localhost:3000/v1/products/";

  constructor(private _http: HttpClient) {}

  getAllProducts(): Observable<ProductDbResponse> {
    return this._http.get<ProductDbResponse>(`${this.baseUrl}/articles`);
  }

  getProduct(id: string): Observable<Product> {
    return this._http.get<Product>(`${this.baseUrl}/article/${id}`);
  }

  // deleteProduct(id: string) : Observable<Product> {
  //   return this._http.delete<Product>(`${this.baseUrl}/articles/${id}`)
  // }

  // deleteAllProducts() : Observable<Product> {
  //   return this._http.delete<Product>(`${this.baseUrl}/articles`)
  // }

  // updateAProduct(id: string, data: Product) : Observable<Product> {
  //   return this._http.put<Product>(`${this.baseUrl}/article/${id}`, data)
  // }
}
