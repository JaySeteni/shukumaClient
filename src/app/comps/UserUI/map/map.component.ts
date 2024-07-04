import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"

let map: google.maps.Map;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent implements OnInit {

 

  ngOnInit(): void {
    this.initmap();
  }

  async initmap(){
    const loader = new Loader({
      apiKey: "AIzaSyCMzKuxTk9J0bI4m7ppb9-Jg9RSV7lrIBw",
      version: "weekly",
    });
    
    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      map = new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  }
}
