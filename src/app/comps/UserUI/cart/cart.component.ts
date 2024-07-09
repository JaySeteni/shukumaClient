import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { CartService } from '../../../services/cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: Product[] = []
  items: any;
  totalAmount = this.cartService.totalAmount;
  cartItems1: any
  cart_id :any
  fullCart: any;

  constructor(private cartService : CartService){}

  ngOnInit(): void {
    this.getCart()

    console.log(this.totalAmount)
    this.items = this.cartService.getItems();
    
  }


  Total() {
    
    this.totalAmount = 0
    this.totalAmount = this.cartItems1.reduce((total:any, item:any) => total + (item.productId.price * item.quantity), 0)
    console.log(this.totalAmount)
    this.cartService.cartTotal.next(this.totalAmount);
    // localStorage.setItem('for', JSON.stringify(this.items))

  }

  removeProduct(item:any,e:Event) {
    const userId = "66865064ad57296a97884bc3"
    const productId = item.productId
    console.log(productId._id)
    this.cartService.removeFromCart(userId,productId._id).subscribe({
      next: (res)=>{
        console.log(res)
      },
      error: (err)=>{
        console.error("",err)
      }
    })

    this.Total();
  }

  qntUpdate($event: any) {
    console.log($event)
    this.Total();
  }

  incre(qty: any, index: number){
    qty++
    this.cartItems1[index].quantity = qty
    console.log(this.cartItems1[index].quantity)
    // this.items[index].quantity = qty
    // this.items.length
    // this.cartService.cartItemcount.next(this.cartService.cartItemcount.value + 1)
    //this.cartService.cartTotal.next(this.cartService.cartTotal.value + this.totalAmount)
    this.cartItems1
    this.Total()
  }
  decr(qty: any, index: number){

    if(qty > 1){
    qty--
    this.cartItems1[index].quantity = qty
    console.log(this.cartItems1[index].quantity)

    // this.items[index].quantity = qty
    // this.items.length;
    // this.cartService.cartItemcount.next(this.cartService.cartItemcount.value - 1)
    //this.cartService.cartTotal.next(this.cartService.cartTotal.value - this.totalAmount)

    this.Total();
    }

  }

  getCart(){

    const id = "66865064ad57296a97884bc3"
    this.cartService.getCart(id).subscribe({
      next: (res: any) => {
          this.cartItems1 = res[0].items
          this.fullCart = res[0]
        console.log(res, this.cartItems1) 
        this.Total()
      },
      error: (err: any) => {
        console.error("An error occurred while fetching product:", err);
      }
    })
    
  }

}
