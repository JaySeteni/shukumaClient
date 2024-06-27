import { Component, OnInit} from '@angular/core';

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

    mockUserProfile: any = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+1234567890',
    avatarUrl: 'https://placeimg.com/150/150/people', 
    bio: 'Software Engineer passionate about building web applications.',
    location: 'New York, USA',
    website: 'https://johndoe.com',
    socialLinks: {
      twitter: 'johndoe',
      instagram: 'johndoe_dev',
    }
  }
  
  ngOnInit(): void {
    
  }
}
