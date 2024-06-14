import { Component, OnInit, Renderer2 } from '@angular/core';
// import { Product } from './product';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
// products: Product[] = [
//   {
//     id: 1,
//     name: 'Product 1',
//     description: 'This is the description for product 1.',
//     price: 29.99,
//     imageUrl: 'https://via.placeholder.com/150'
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     description: 'This is the description for product 2.',
//     price: 39.99,
//     imageUrl: 'https://via.placeholder.com/150'
//   },
//   {
//     id: 3,
//     name: 'Product 3',
//     description: 'This is the description for product 3.',
//     price: 49.99,
//     imageUrl: 'https://via.placeholder.com/150'
//   }
// ];
shouldDisplayThemeToggle(): any {
throw new Error('Method not implemented.');
}
  isDarkTheme = false;
  delivery: any;

  constructor(private renderer: Renderer2, private sanitizer: DomSanitizer,) {}

  ngOnInit(): void {
  const imagePath = 'assets/delivery.jpg';
  this.delivery = this.sanitizer.bypassSecurityTrustResourceUrl(imagePath);
  
}

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
 
  // products: Product[] = [
  //   {
  //     id: 1,
  //     name: 'Product 1',
  //     description: 'This is the description for product 1.',
  //     price: 29.99,
  //     imageUrl: 'https://via.placeholder.com/150'
  //   },
  //   {
  //     id: 2,
  //     name: 'Product 2',
  //     description: 'This is the description for product 2.',
  //     price: 39.99,
  //     imageUrl: 'https://via.placeholder.com/150'
  //   },
  //   {
  //     id: 3,
  //     name: 'Product 3',
  //     description: 'This is the description for product 3.',
  //     price: 49.99,
  //     imageUrl: 'https://via.placeholder.com/150'
  //   }
  // ];

