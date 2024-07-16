import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../services/orders/orders.service';
import { Favorites } from '../../../interfaces/favorites';
import { FavoritesService } from '../../../services/favorites/favorites.service';
import { CartService } from '../../../services/cart-service/cart.service';
import { Location } from '@angular/common';
import { Product } from '../../../interfaces/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
  
  favorites: Favorites[] = [];
  error: string | null = null;
  item: any[] = [];
  itemId:any;

  constructor( private favoritesService: FavoritesService, private location: Location, private router: Router ) {}

  ngOnInit(): void {
    this.getAllfavorites()

  } 

  id = "66865064ad57296a97884bc3"
  getAllfavorites(){

    this.favoritesService.fetchFavs(this.id).subscribe({
      next: (data: any) =>{

        this.favorites = data;
        
      console.log('Data received from getAllfavorites:', this.favorites); // Log the entire response object
        
      },
      error: (err: any) => {
        console.error('Error fetching favorites:', err);
      }
    })
  }

  view(id: Product["id"]){
      
  }

  confirmDelete(id: any) {
    console.log(id)
    this.favoritesService.deleteItem(id).subscribe({
      next: (response: any) => {
        console.log(response)
        // Handle successful deletion (e.g., remove item from UI)
        // this.item = this.item.filter(favorite => favorite.itemId.id !== itemId); // Use itemId parameter
        // this.router.navigate(['/another-route']);
      },
      // error: (error) => {
      //   // Handle deletion error (e.g., display error message)
      //   console.error("Error deleting item:", error);
      // }
    });
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