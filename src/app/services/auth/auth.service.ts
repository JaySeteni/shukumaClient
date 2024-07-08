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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  registerUser(userData: UserRegister) {
    return this.http.post('http://localhost:3000/v1/auth/register', userData);
  }

  login(userData: UserLogin) {
    this.http.post<SignInData>('http://localhost:3000/v1/auth/signin', userData).subscribe({
      next: (res: SignInData) => {
        console.log(res)
      }
    })
  }
}
