import { Component } from '@angular/core';
import { Product } from '../../product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: Product[] = []
  items: any;
  totalAmount = this.cartService.totalAmount;
  
  constructor(private cartService : CartService){}



  Total() {
    
    this.totalAmount = 0
    this.items.forEach((item: { quantity: number; price: number; }) => {
      this.totalAmount += (item.quantity * item.price);
      //this.cartTotal.next(this.totalAmount);
      //console.log(this.cartTotal)
      localStorage.setItem('Total',JSON.stringify(this.totalAmount))
    })
    
    this.cartService.cartTotal.next(this.totalAmount);
    // localStorage.setItem('for', JSON.stringify(this.items))
    
  }

  removeProduct(index:any,e:Event) {
    console.log(this.items[index].quantity)

    this.cartService.cartItemcount.next(this.cartService.cartItemcount.value - this.items[index].quantity)
    this.items.splice(index, 1);
    this.Total();
    localStorage.setItem('for', JSON.stringify(this.items))
  }

  qntUpdate($event: any) { 
    this.Total();
  }

  incre(qty: any, index: number){
    qty++
    this.items[index].quantity = qty
    this.items.length
    this.cartService.cartItemcount.next(this.cartService.cartItemcount.value + 1)
    //this.cartService.cartTotal.next(this.cartService.cartTotal.value + this.totalAmount)

    this.Total();
  }
  decr(qty: any, index: number){
    
    if(qty > 1){
      qty--
    this.items[index].quantity = qty
    this.items.length;
    this.cartService.cartItemcount.next(this.cartService.cartItemcount.value - 1)
    //this.cartService.cartTotal.next(this.cartService.cartTotal.value - this.totalAmount)

    this.Total();
    }
    
  }
  
}
