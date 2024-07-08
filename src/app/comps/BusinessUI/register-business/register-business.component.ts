import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register-business',
  templateUrl: './register-business.component.html',
  styleUrl: './register-business.component.css'
})
export class RegisterBusinessComponent {
  
  signUpBusinesses: any[] = [];
  signUpObj: any = { 
    name: '',
    email: '',
    address: '',
    tel_no: '',
    description:'',
  };
  
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    tel_no: new FormControl(""),
    address: new FormControl(""),
    description: new FormControl("")
  });
  constructor(private _auth: AuthService, private _router: Router) { }
  
  onSignUp() {
    const {name, email, address, tel_no, description } = this.registerForm.value
    
    this._auth.registerBusiness(this.registerForm.value).subscribe({
      next: ()=> {
      this._router.navigate(["/admin"])
      }
    })
  }
}