import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  isSuccessful = false
  isSignUpFailed = false
  errorMessage = ''
  registerForm : FormGroup

  constructor(private _auth: AuthService, private _router: Router, private fb : FormBuilder, private router: Router,) {
    this.registerForm = this.fb.group({
      username: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
      })
  }

  ngOnInit(): void {
  }

  comparePasswords(control: FormGroup){

    if (control.value.password  !==  control.value.confirmPassword) {
      return { passwordsDontMatch: true };
    }
    return null;
  }
  

  onSignUp(){
    console.log((this.registerForm.value))
    if (this.registerForm.invalid) {
      return; // Prevent submission if form is invalid
    }

    this._auth.registerUser(this.registerForm.value).subscribe({
      next: (res)=> {
          console.log(res)
          this.isSuccessful = true
          this.errorMessage = "Login is successful!"
           setTimeout(()=>{
          this.router.navigate(['/login'])
        }, 3000)
      
      }, error: (err)=>{
          console.error(err)
      }
    })
  }

}
