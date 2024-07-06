import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product-service/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../services/cart-service/cart.service';
import { Product } from '../../../interfaces/product';
import { ProductDbResponse } from '../../../interfaces/productDbResponse';
import { CartItem } from '../../../interfaces/cartItem';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  selectedCategory: string = 'all';

  allProduct : any = []
  products: any;
  // page:any
  items:any = []

  // sortByCategory(category: string) {
  //   // console.log(`Selected category: ${category}`);
  //   this.selectedCategory = category;
  //   if (category === 'all') {
  //     this.products = [...this.products];
  //   } else {
  //     this.products = this.products.filter((product: { category: string; }) => product.category === category);
  //   }
  //   console.log('Selected category:', this.selectedCategory);
  // }


  constructor(private _productService: ProductService, private route: ActivatedRoute){}

  ngOnInit(): void {
      this.getAllProducts()
      // this.filter(this.products)
  }
  getAllProducts(){
    // const path = this.route.snapshot.paramMap.get('name')
    // this.page = path
    // this._productService.getAllProducts().subscribe({
    //   next: (data: ProductDbResponse )=>{
    //   this.allProduct = data.products
    //   console.log(path)
    //   this.filter(path)
    //   },
    //   error: err=>{
    //     console.log(err)
    //   }
    // })
  }
// filter(path:any){
// console.log(path)
// this.items = this.allProduct.filter((products:any) => products.category == path)
// console.log(this.allProduct)
}

// addToCart(item: CartItem){

//   this.cartSservice.addToCart(item)

// }




