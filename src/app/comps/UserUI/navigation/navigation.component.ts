import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart-service/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  isNavbarOpen = false;
  collapsed = false;
  likes :any

  constructor(private router: Router,  private cartService: CartService ) {}

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    this.collapsed = this.isNavbarOpen;
  }


  closeNavbar() {
    this.isNavbarOpen = false;
  }
  ngOnInit(): void {
    
  }

}

