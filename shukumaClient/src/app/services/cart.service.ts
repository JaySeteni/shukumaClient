import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //global values
  cartItemcount = new BehaviorSubject<number>(0);
  favList = new BehaviorSubject<number>(0)
  public cartTotal = new BehaviorSubject<number>(0);
  wishList:Product[] = []
  items: Product[] = [];
  isAddedToCart: Boolean = false


  totalAmount=0;


  constructor() { }

  addToCart(product: Product ) {

    const productExistInCart = this.items.find(({id}) => id === product.id);
    if (!productExistInCart) {
    this.items.push(product);
    this.isAddedToCart = true
    this.cartItemcount.next(this.cartItemcount.value + 1);
    console.log(this.items)
    return;
   }

    productExistInCart.quantity = productExistInCart.quantity + 1;
    this.cartItemcount.next(this.cartItemcount.value + 1);
    console.log(this.items)
}
  addToWishlist(product: Product){
    const productAlready = this.wishList.find(({id}) => id === product.id);
    if (!productAlready) {

      this.wishList.push(product);
      this.favList.next(this.favList.value + 1);
      console.log(this.favList.value)
      return;
    }else{
      console.log("Product already Exist!")
    }
  }

    Total() {

      this.totalAmount = 0
      this.items.forEach((item:any) => {
        this.totalAmount += (item.price * item.quantity)
        //this.cartTotal.next(this.totalAmount);
        console.log(this.cartTotal)
        localStorage.setItem('Total',JSON.stringify(this.totalAmount))
      })

      this.cartTotal.next(this.totalAmount);
      localStorage.setItem('for', JSON.stringify(this.items))

    }
    getItems(): Product[] {

      return this.items;
    }

    getWishilist():Product[]{
      return this.wishList;
    }

    getAdded(){
      return this.isAddedToCart;
    }
    getTotal(){

    }

}
