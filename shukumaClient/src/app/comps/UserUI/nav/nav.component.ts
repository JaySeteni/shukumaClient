import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

  isNavbarOpen = false;
  collapsed = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    this.collapsed = this.isNavbarOpen;
  }

  // navigateTo(path: string) {
  //   this.router.navigate([path]);
  //   this.toggleNavbar(); // Close the navbar after navigation
  // }
  closeNavbar() {
    this.isNavbarOpen = false;
  }

}
