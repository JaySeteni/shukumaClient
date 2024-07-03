import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
    initFlowbite();
  }
}

