import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart-service/cart.service';
import { OrdersService } from '../../../services/orders/orders.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  totalAmount = JSON.parse(`${localStorage.getItem('Total')}`)
  cart: any
  items: any
  date: any
  customer: any

  tot = 0
  constructor(private cartService: CartService, private orderService : OrdersService){}

  ngOnInit(): void {
    this.cart = JSON.parse(`${localStorage.getItem('cart_id')}`)
    
     this.totalAmount
     this.getOrder()
  }

  getOrder(){

    console.log(this.cart)

    this.orderService.fetchAnOrder(this.cart).subscribe({
      next: (cart:any)=>{
        this.items = cart
        this.date = new Date(this.items[0].createdAt)
        this.customer = this.items[0].userId
        console.log( cart )
      },
      error: (err: any)=>{
        console.error("An error occured while feetching order", err)
      }
    })

  }
}
