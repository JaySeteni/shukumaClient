import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user_API = "http://localhost:3000/v1/users"
  constructor(private http: HttpClient) { }

  getUser(id: any):Observable<any>{
    return this.http.get<any>(`${this.user_API}/${id}`);
  }

  getAllUsers():Observable<any>{
    return this.http.get<any>(`${this.user_API}/all`);
  }


}
