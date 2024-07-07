import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserRegister } from '../../interfaces/userRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  
  registerUser(userData: UserRegister) {
    return this.http.post('http://localhost:3000/v1/auth/register', userData); // Replace with your API endpoint
  }
}
