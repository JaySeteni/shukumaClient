import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProductDbResponse } from '../../interfaces/productDbResponse';
import { Order } from '../../interfaces/order';



// Add other relevant order properties (e.g., items, total, status)
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

    private baseUrl = "http://localhost:3000/v1/orders";   
    orders: Order[] = [];
    error: string | null = null;
  constructor( private http:HttpClient) { }


  // getAllOrders(): Observable<Order[]> {
  //   return this.http.get<Order[]>(this.baseUrl)
  //     .pipe(
  //       map(response => response as Order[]),
  //     );
  //   }
    
  getAllOrders(): Observable<ProductDbResponse> {
    return this.http.get<ProductDbResponse>(`${this.baseUrl}/orders`);
  }

  addOrder(payload: any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`, payload)
  }

  fetchOrder(cartId:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${cartId}`)
  }
}
