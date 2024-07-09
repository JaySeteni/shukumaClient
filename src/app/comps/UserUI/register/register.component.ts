import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  constructor(private _auth: AuthService, private _router: Router) {

  }

  ngOnInit(): void {
  }

  registerForm: FormGroup = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl("")
  })

  onSignUp(){
    const {username, email, password} = this.registerForm.value

    this._auth.registerUser(this.registerForm.value).subscribe({
      next: ()=> {
      this._router.navigate(["/login"])
      }
    })
  }

}
