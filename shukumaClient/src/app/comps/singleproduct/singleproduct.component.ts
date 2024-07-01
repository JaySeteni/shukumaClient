import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product'; // Assuming Product interface
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent implements OnInit {
  products: any [] = []
  isAdded: any
  selectedProduct: any

  constructor(
    private route: ActivatedRoute,
    private mainService: MainService,
    private cartService: CartService, 
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.getOneProduct()
  }

  getAllProducts(){

    this.mainService.getAllProducts().subscribe({
      next: data =>{
      this.products = data.products
      },
      error: err=>{
        console.log(err)
      }
    })
  }
  getOneProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');

    
      this.mainService.getProduct(id).subscribe({
        next: (res: any) => {
          this.selectedProduct = res.product;
        },
        error: (err: any) => {
          console.error("An error occurred while fetching product:", err);
          // Handle errors gracefully (e.g., display an error message)
        }
      });
  }

  addToCart(item: Product): void {
    this.cartService.addToCart(item); // Assuming cartService exists in your setup
    this.isAdded = this.cartService.getAdded(); // Assuming getAdded returns a boolean
  }

  saveForLaterButton(product: Product): void {
    this.cartService.addToWishlist(product); // Assuming cartService exists
  }
}
