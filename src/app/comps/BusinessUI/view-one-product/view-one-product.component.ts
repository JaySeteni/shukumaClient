import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product-service/product.service';

@Component({
  selector: 'app-view-one-product',
  templateUrl: './view-one-product.component.html',
  styleUrl: './view-one-product.component.css'
})
export class ViewOneProductComponent implements OnInit {
  selectedProduct?: Product;
   errMessage: any = ""

  constructor( private route: ActivatedRoute, private _productService: ProductService,) { }
  
  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
      this._productService.getProduct(id).subscribe({
        next: (res: any) => {
          console.log(res)
          this.selectedProduct = res.product;
        },
        error: (err: any) => {
          console.error("An error occurred while fetching product:", err);
        }
      });
  }
}
