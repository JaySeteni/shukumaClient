import { Component } from '@angular/core';
import { Product } from '../../../interface/product';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    quantity: 0
  };

  addProduct() {
    console.log(this.product);
  }
}
