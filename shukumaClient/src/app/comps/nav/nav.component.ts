import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  userName = localStorage.getItem('userName') || 'Jay'; // Default to 'Jay' if not set


  constructor(private router: Router) {
    localStorage.setItem('userName', 'Jay')
  }

  
    ngOnInit(): void {
    }
    
    

}
