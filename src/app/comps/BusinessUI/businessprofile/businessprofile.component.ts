import { Component, OnInit } from '@angular/core';

interface BusinessProfile {
  name: {
    type: string,
    required:true;
    trim: true,
    unique: true,
  };
  email:{
    type: string,
    required: true,
    trim: true,
  };
  description: {
    type: string,
    required: true,
    trim: true,
  };
  industry: string,
  tel_no: {
    type:string,
    required: true,
    trim: true,
  };
  avatarUrl: string;
  address: string,
  img: {
    type: string,
    default: "https://www.thesait.org.za/global_graphics/default-store-350x350.jpg"
  };
}

@Component({
  selector: 'app-businessprofile',
  templateUrl: './businessprofile.component.html',
  styleUrl: './businessprofile.component.css'
})
export class BusinessprofileComponent implements OnInit{

  mockBusinessProfile: any = {
    name: 'mzimkhulu',
    email: 'john.doe@example.com',
    description: 'Mzimkhulu is a gas selling company LTD. ',
    tel_no: '+1234567890',
    industry: 'gas',
    avatarUrl: 'https://www.denofgeek.com/wp-content/uploads/2021/09/Anthony-Mackie.png?fit=1200%2C883', 
    address: '123 Joe Crescent, New York, USA, 7785',
    img: 'https://www.thesait.org.za/global_graphics/default-store-350x350.jpg'
  }
  
  ngOnInit(): void {
    
  }
}
