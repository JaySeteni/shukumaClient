import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject, of} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Product } from './product';



@Injectable({
  providedIn: 'root'
})
export class MainService {

  private apiUrl = "http://localhost:3000/v1/product/";
  private orderUrl = "http://localhost:3000/v1/orders";

  constructor(private http: HttpClient) {}

  getAllProducts():Observable<any>{
    return this.http.get(this.apiUrl + "get-all")
  }

  getOneProduct(id: any): Observable<any> {

    return this.http.get(`${this.apiUrl} + ${id}`);
  }

  getAllOrders(): Observable<any> {
    return this.http.get(this.orderUrl + "get-all")
  }
}

