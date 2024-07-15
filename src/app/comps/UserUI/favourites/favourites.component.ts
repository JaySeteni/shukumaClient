import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../services/orders/orders.service';
import { Favorites } from '../../../interfaces/favorites';
import { FavoritesService } from '../../../services/favorites/favorites.service';
import { CartService } from '../../../services/cart-service/cart.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
  favorites: Favorites[] = [];
  error: string | null = null;

  constructor( private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.getAllfavorites()

  } 

  getAllfavorites(){

      const id = "66865064ad57296a97884bc3"
    this.favoritesService.fetchFavs(id).subscribe({
      next: (data: any) =>{

        this.favorites = data;
        
      console.log('Data received from getAllfavorites:', this.favorites); // Log the entire response object
        
      },
      error: (err: any) => {
        console.error('Error fetching favorites:', err);
      }
    })
  }
}

// getCart(){

//   const id = "66865064ad57296a97884bc3"
//   this.cartService.getCart(id).subscribe({
//     next: (res: any) => {
//         this.cartItems1 = res[0].items
//         this.fullCart = res[0]
//       console.log(res[0].id) 
//       this.Total()
//     },
//     error: (err: any) => {
//       console.error("An error occurred while fetching product:", err);
//     }
//   })
  
// }