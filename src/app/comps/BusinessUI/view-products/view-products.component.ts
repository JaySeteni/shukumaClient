import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../services/product-service/product.service';
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {

  products:any

  constructor( productService:ProductService) { }

  ngOnInit(): void {
    
  }
}
