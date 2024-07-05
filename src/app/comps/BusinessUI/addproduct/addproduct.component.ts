import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  product: Product = {
    id: "0",
    title: '',
    description: '',
    price: 0,
    imageUrl: '',
    quantity: 0,
    businessId: '',
    category: [],
    onPromo: false,
    rating: 0,
    ratingCount: 0,
    stock: 0,
    variant: ''
  };

  addProduct() {
    console.log(this.product);
  }
}
