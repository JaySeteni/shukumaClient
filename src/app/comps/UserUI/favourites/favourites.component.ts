import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../services/orders/orders.service';
import { Favorites } from '../../../interfaces/favorites';
import { FavoritesService } from '../../../services/favorites/favorites.service';
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

    this.favoritesService.getAllfavorites().subscribe({
      next: (data: any) =>{

        this.favorites = data;
        
      console.log('Data received from getAllfavorites:', this.favorites); // Log the entire response object
        
      },
      error: (err) => {
        console.error('Error fetching favorites:', err);
      }
    })
  }
}
