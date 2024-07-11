import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserRegister } from '../../interfaces/userRegister';
import { UserLogin } from '../../interfaces/userLogin';
import { Observable } from 'rxjs';
import { SignInData } from '../../interfaces/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  businessId = ''

  getId(id: any) {
    return this.businessId = id
  }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  registerUser(userData: UserRegister):Observable<any> {
    return this.http.post<any>('http://localhost:3000/v1/auth/register', userData);
  }

  login(userData: UserLogin):Observable<any> {
    return this.http.post<any>('http://localhost:3000/v1/auth/signin', userData);
  }

  registerBusiness(payload: any):Observable<any> {
    return this.http.post<any>('http://localhost:3000/v1/business', payload);
  }
  

  
}

