import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-business',
  templateUrl: './register-business.component.html',
  styleUrl: './register-business.component.css'
})
export class RegisterBusinessComponent {
  showLoginPage: boolean = true;
  registerBusinessPage: boolean = false;
  
  signUpUsers: any[] = [];
  loginObj: { [key: string]: string } = { 
    email: '',
    password: '',
  }
  
  loginForm: FormGroup;
  
  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    }); 
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signUpUsers = JSON.parse(localData);
    }
  }

  OnLogin(): void {
    const isUserExist = this.signUpUsers.find(
      user => user['email'] === this.loginForm.value.email && user['password'] === this.loginForm.value.password
    );

    if (isUserExist !== undefined) {
      alert('Logged in successfully');
      this.loginForm.reset();
      this.router.navigate(['userhome']); // navigate to the home screen
    } else {
      alert('Incorrect credentials');
    }
  }
}