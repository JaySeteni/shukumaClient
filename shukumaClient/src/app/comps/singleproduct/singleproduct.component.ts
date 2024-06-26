import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product';
import { CartService } from '../../services/cart.service';



@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent implements OnInit {
  isAdded:any;
  product:any

  originalProducts: Product[] = [];

constructor ( private cartService: CartService, private route: ActivatedRoute,
  private mainServer: MainService ){ }

  ngOnInit():void{
    // this.getOne()
    // this.getAllProducts()
  }

  getOne(){
  //   const id = this.route.snapshot.paramMap.get('id')
  
  //   this.mainServer.getProduct(id).subscribe({
  //     next:(product)=>{
  //       this.product = product
  //       console.log(product)
  //     },
  //     error:(err: any)=>{
  //       console.error(err)
  //     },
  //   })
  // }

  // addToCart(item: Product){

  //   this.cartService.addToCart(item)
  //   this.isAdded = this.cartService.getAdded()
  // }

  // saveForLaterButton(product: Product) {
  //   this.cartService.addToWishlist(product)
  // }

  // getAllProducts() {
  //   this.mainServer.getProducts().subscribe({
  //     next: (data: any) => {
  //       this.originalProducts = data.allArticles;
      
  //       console.log('All products:', this.originalProducts);
  //       // this.products = this.originalProducts; 
  //     },
  //     error: (err: any) => {
  //       console.error("An error occurred while fetching products:", err);
  //     }
  //   });
  }
}

