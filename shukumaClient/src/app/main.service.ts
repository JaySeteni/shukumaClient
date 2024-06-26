import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from './product';



@Injectable({
  providedIn: 'root'
})
export class MainService {

  private apiUrl = "http://localhost:3000/v1/product/";
  private orderUrl = "http://localhost:3000/v1/orders";


  cartCount = new BehaviorSubject<number>(0)

  broadcaster(someValue: number){
    this.cartCount.next(someValue)
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  deleteProduct(id: number) {
    throw new Error('Method not implemented.');
  }
  
  addProduct(arg0: Product) {
    throw new Error('Method not implemented.');
  }
  

  constructor(private http: HttpClient) {}

  getAllProducts():Observable<any>{
    return this.http.get(this.apiUrl + "get-all")
  }

  getProduct(id: any): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}${id}`)
  }


}
