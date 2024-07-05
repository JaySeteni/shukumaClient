import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product-service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../interfaces/product';
import { CartService } from '../../../services/cart-service/cart.service';
import { ProductDbResponse } from '../../../interfaces/productDbResponse';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent implements OnInit {
  products: any [] = []
  isAdded: any
  selectedProduct?: Product;

  constructor(
    private route: ActivatedRoute,
    private _productService: ProductService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.getOneProduct()
  }

  getAllProducts(){

    this._productService.getAllProducts().subscribe({
      next: (data: ProductDbResponse) =>{
      this.products = data.products

      console.log(this.products)
      },
      error: err=>{
        console.log(err)
      }
    })
  }

  getOneProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
console.log(id)
      // this.mainService.getProduct(id).subscribe({
      //   next: (res: any) => {
      //     this.selectedProduct = res.product;
      //   },
      //   error: (err: any) => {
      //     console.error("An error occurred while fetching product:", err);
      //     // Handle errors gracefully (e.g., display an error message)
      //   }
      // });
  }

  addToCart(item: Product): void {
    // this.cartService.addToCart(item); // Assuming cartService exists in your setup
    // this.isAdded = this.cartService.getAdded(); // Assuming getAdded returns a boolean
  }

  saveForLaterButton(product: Product): void {
    // this.cartService.addToWishlist(product); // Assuming cartService exists
  }
}
