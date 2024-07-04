import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  isNavbarOpen = false;
  collapsed = false;

  constructor(private router: Router) {}

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
  ngOnInit(): void {
    
  }
}

