import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject, of} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Product } from './product';



@Injectable({
  providedIn: 'root'
})
export class MainService {

  private apiUrl = "http://localhost:3000/v1/product/";

  constructor(private http: HttpClient) {}

  getAllProducts():Observable<any>{
    return this.http.get(this.apiUrl + "get-all")
  }

  getOneProduct(id: any): Observable<any> {

    return this.http.get(`${this.apiUrl}${id}`);
  }


<<<<<<< HEAD
}
=======

}
>>>>>>> parent of 9734ddf (pushing orders)
