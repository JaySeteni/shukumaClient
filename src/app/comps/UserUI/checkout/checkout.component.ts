import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  totalAmount = JSON.parse(`${localStorage.getItem('Total')}`)

  tot = 0
  constructor(private cartService: CartService){}

  ngOnInit(): void {
     this.totalAmount
  }
}
