import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product-service/product.service';
import { ProductDbResponse } from '../../../interfaces/productDbResponse';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this._productService.getAllProducts().subscribe({
      next: (data: ProductDbResponse) => {
        this.products = data.products;
        console.log(this.products);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
