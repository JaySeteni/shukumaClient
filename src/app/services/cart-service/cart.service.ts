import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../interfaces/product';
import { CartItem } from '../../interfaces/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemcount = new BehaviorSubject<number>(0);
  favList = new BehaviorSubject<number>(0);
  cartTotal = new BehaviorSubject<number>(0);
  wishList: Product[] = [];
  items: CartItem[] = [];
  isAddedToCart: Boolean = false;

  totalAmount = 0;

  constructor() {}

  addToCart(cartItem: CartItem) {
    const productExistsInCart = this.items.find(
      ({ productId }) => productId === cartItem.productId
    );

    if (!productExistsInCart) {
      this.items.push(cartItem);
      this.isAddedToCart = true;
      this.cartItemcount.next(this.cartItemcount.value + 1);
    } else {
      productExistsInCart.quantity += 1;
      this.cartItemcount.next(this.cartItemcount.value + 1);
    }
  }

  addToWishlist(product: Product) {
    const productAlready = this.wishList.find(({ id }) => id === product.id);

    if (!productAlready) {
      this.wishList.push(product);
      this.favList.next(this.favList.value + 1);
    } else {
      console.log('Product already Exist!');
    }
  }

  getTotal() {
    this.totalAmount = 0;
    this.items.forEach((item: CartItem) => {
      this.totalAmount += item.price * item.quantity;
      localStorage.setItem('Total', JSON.stringify(this.totalAmount));
    });

    this.cartTotal.next(this.totalAmount);
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getWishilist(): Product[] {
    return this.wishList;
  }

  checkCartItemAddition() {
    return this.isAddedToCart;
  }
}
