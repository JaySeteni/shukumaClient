import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

<<<<<<< HEAD
   constructor(private router: Router) {
    localStorage.setItem('userName', 'Jay')
=======

  constructor(private router: Router) {
>>>>>>> 664a9af7524d72e8b0422b858827c96c76549357
  }
  
  
    ngOnInit(): void {
    }
    
    

}
