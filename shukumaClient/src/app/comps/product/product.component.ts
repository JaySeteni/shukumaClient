import { Component } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
// products: any;
products: Product [] = [

  {
    id: 1,
    name: 'Product 1',
    description: 'This is the description for product 1.',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the description for product 1.',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/150'
  }
]
}
