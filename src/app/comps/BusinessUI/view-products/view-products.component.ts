import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { products } from '../../../../../mock-product';
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
  products: Product[] = products;

  constructor() { }

  ngOnInit(): void {
  }
}
