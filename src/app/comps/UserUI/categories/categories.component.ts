import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  selectedCategory: string = 'all';

  allProduct : any = []
  products: any;
  page:any
  category: string[] = ['Gas Cylinders', 'Gas Accessories', 'Stoves'];
  items:any = []

  sortByCategory(category: string) {
    // console.log(`Selected category: ${category}`);
    this.selectedCategory = category;
    if (category === 'all') {
      this.products = [...this.products];
    } else {
      this.products = this.products.filter((product: { category: string; }) => product.category === category);
    }
    console.log('Selected category:', this.selectedCategory);
  }


  constructor(private mainServer: MainService, private route: ActivatedRoute, private cartSservice: CartService){}

  ngOnInit(): void {
      this.getAllProducts()
      this.filter(this.products)
  }
  getAllProducts(){
    const path = this.route.snapshot.paramMap.get('name')
    this.page = path
    this.mainServer.getAllProducts().subscribe({
      next: data =>{
      this.allProduct = data.products
      console.log(path)
      this.filter(path)
      },
      error: err=>{
        console.log(err)
      }
    })
  }
filter(path:any){
console.log(path)
this.items = this.allProduct.filter((products:any) => products.category == path)
console.log(this.items)
}

addToCart(item: Product){

  this.cartSservice.addToCart(item)
 
}
}



