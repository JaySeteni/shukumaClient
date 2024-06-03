import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  signUpUsers: any[] = [];
  signUpObj: any = { 
    email: '',
    password: ''
  };

  constructor() { }

  onSignUp(){
    this.signUpUsers.push(this.signUpObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signUpUsers));
    console.log(this.signUpUsers);
    alert('registered successfully')
    this.signUpObj = { 
      email: '',
      password: ''
    };
  }

  

  ngOnInit(): void {
  }
}
