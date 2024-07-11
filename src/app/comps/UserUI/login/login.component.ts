
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { TokenService } from '../../../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imagePreview: any;
  somevalue:any
  userForm:any = FormGroup
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("");
  password: FormControl = new FormControl("",[Validators.required, Validators.minLength(8)]);
  // img: FormControl = new FormConrol()



  isLogginFailed = false
  isSuccessful = false
  errorMessage = ''
  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService, private tokenStorage : TokenService) {
    this.userForm = this.fb.group({

      username: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  
    
  }
  login(){
    console.log(this.userForm.value)
    this.auth.login(this.userForm.value).subscribe({
      next: (data)=>{
        console.log(data)
        this.tokenStorage.saveToken(data.token)
        this.tokenStorage.saveUser(data)
        this.isSuccessful=true
        this.errorMessage = "Login is successful!"
        setTimeout(()=>{
          this.router.navigate(['/userhome'])
        }, 3000)
      },
      error: (err)=>{
        console.error("An err", err)
        this.isLogginFailed= true
        this.errorMessage = "Login failed!"
      }
    })

  }

  // onSubmit(): void {
    
  //   );

  //   if (isUserExist !== undefined) {
  //     alert('Logged in successfully');
  //     this.loginForm.reset();
  //     this.router.navigate(['userhome']); // navigate to the home screen
  //   } else {
  //     alert('Incorrect credentials');
  //   }
  // }
}
