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
  favsCount : any;
  cartCounter: any;




    constructor(private cartService: CartService) { }
    isEmpty=true

    fcolor= '#e01219'

    ngOnInit(): void {
      this.favListCount$ = this.cartService.favList
      this.cartCount$ = this.cartService.cartItemcount

      this.fetchFavs()
    }

    
  fetchFavs(){
    const id = "66865064ad57296a97884bc3"
    this.cartService.fetchFavs(id).subscribe({
      next: (res: any) => {
          this.favsCount = res.length
        console.log(res) 
      },
      error: (err: any) => {
        console.error("An error occurred while fetching product:", err);
      }
    })
  }

  geCart(){
    const id = "66865064ad57296a97884bc3"
    this.cartService.getCart(id).subscribe({
      next: (res: any) => {
          this.cartCounter = res.length
        console.log(res) 
      },
      error: (err: any) => {
        console.error("An error occurred while fetching product:", err);
      }
    })
    
  }

}
