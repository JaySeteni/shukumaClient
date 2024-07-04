import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart-service/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  favListCount$ = new BehaviorSubject<number>(0);
  cartCount$ = new BehaviorSubject<any>(0)






    constructor(private cartService: CartService) { }
    isEmpty=true

    fcolor= '#e01219'

    ngOnInit(): void {
      this.favListCount$ = this.cartService.favList
      this.cartCount$ = this.cartService.cartItemcount
    }

}
