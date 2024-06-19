import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  allProduct : any = []
  products: any;
  page:any
  category: string[] = ['Gas Cylinders', 'Gas Accessories', 'Stoves'];
  items:any = []

  sortByCategory(category: string) {
    console.log(`Selected category: ${category}`);
  }


  constructor(private mainServer: MainService, private route: ActivatedRoute){}

  ngOnInit(): void {
      this.getAllProducts()
      // this.filter()
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
}



