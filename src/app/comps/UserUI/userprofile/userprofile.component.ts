import { Component, OnInit} from '@angular/core';
import { TokenService } from '../../../service/token.service';
import { UserService } from '../../../services/user.service';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  avatarUrl: string; 
  bio: string; 
  location: string; 
  website: string; 
  socialLinks: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  }
}


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})

export class UserprofileComponent implements OnInit {
    
  constructor(private tokenService: TokenService, private userService :  UserService){}

  user:any

      
  ngOnInit(): void {
    this.getAllUser()
    this.getUser()
  }

  getUser(){
    const user = this.tokenService.getUser()
    console.log(user)
    this.userService.getUser(user.id).subscribe({
      next:(data)=>{
        console.log(data)
        this.user= data.user
      }, error: (err)=>{
        console.error(err)
      }
    })

    

  }

  getAllUser(){
   
    this.userService.getAllUsers().subscribe({
      next:(data)=>{
        console.log(data.user)
        
      }, error: (err)=>{
        console.error(err)
      }
    })

    

  }
}
