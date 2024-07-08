import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../interfaces/product';
import { CartItem } from '../../interfaces/cartItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

  httpOptions = {
    "Accept": "application/json"
  }

  private baseUrl: string = "http://localhost:3000/v1/cart/";
  private likesUrl: string = "http://localhost:3000/v1/favourites/"

  constructor(private _http: HttpClient) {}

  getCart(id: any): Observable<any> {
    return this._http.get<any>(`${this.baseUrl}`, id);
  }

  addtoCart(payload: any ):Observable<any>{
    return this._http.post<any>(`${this.baseUrl}add/`, payload  )
  } 
  
  addToWishlist(payload: any):Observable<any> {
    return this._http.post<any>(`${this.likesUrl}`, payload)
  }

  fetchFavs(id: any):Observable<any> {
    return this._http.get<any>(`${this.likesUrl}`, id)
  }

  removeFromCart(userId:any, productId: any ): Observable<any>{
    return this._http.delete<any>(`${this.baseUrl}one?userId=${userId}&productId=${productId}`, )
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
