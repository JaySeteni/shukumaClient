import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
 // cards: number[] = [1, 2, 3, 4];
 services = [
  {
    title: 'Service 1',
    description: 'Description of Service 1',
    imageUrl: 'service1.jpg',
    url: '/addproduct'
  },
];
 isNavbarOpen = false;
  collapsed = false;

  constructor(private router: Router) {}

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    this.collapsed = this.isNavbarOpen;
  }

  
  closeNavbar() {
    this.isNavbarOpen = false;
  }


ngOnInit(): void {
  initFlowbite();
}
}
