import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product-service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  selectedCategory: string = 'all';

  allProducts : any = []
  products: any;
  page:any
  categories: string[] = ['Gas Cylinders', 'Gas Accessories', 'Stoves'];
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


  constructor(
    private _productService : ProductService,
     private route: ActivatedRoute){}

  ngOnInit(): void {
      this.getAllProducts()
      this.filter(this.products)
  }

  getAllProducts(){
    const path = this.route.snapshot.paramMap.get('name')
    this.page = path


    this._productService.getAllProducts().subscribe({
      next: (data: any) =>{
      this.allProducts = data.products
      console.log(path)
      console.log(this.allProducts)
      this.filter(path)
      },
      error: err=>{
        console.log(err)
      }
    })
  }

filter(path:any){
// console.log(path)
this.items = this.allProducts.filter((products:any) => products.category == path)
// console.log(this.items)
}

}



