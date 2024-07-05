import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { ProductService } from '../../../services/product-service/product.service';
import { Product } from '../../../interfaces/product';
import { ProductDbResponse } from '../../../interfaces/productDbResponse';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent implements OnInit {
  allProduct : any = []
  Cylinders :any = []
  Stoves :any = []
  Spares :any = []
  
  products: any;


  constructor(
    private mainServer: MainService, private product: ProductService
  ){}

  ngOnInit(): void {
    this.getAllProducts()
}

getAllProducts(){

  this._productService.getAllProducts().subscribe({
    next: (data: ProductDbResponse) =>{
    this.allProducts = data.products
      console.log(data)
      this.filterItemsByCylinders()
      this.filterStoves()
      this.filterSpares()

    },
    error: err=>{
      console.log(err)
    }
  })
}

filterItemsByCylinders() {
  this.Cylinders = this.allProduct.filter((item:any) => {
    return (item.category.includes('Cylinders'))
});
  console.log(this.Cylinders)
}

filterStoves() {
  this.Stoves = this.allProduct.filter((item:any) => {
    return (item.category.includes('Stoves'))
});
  console.log(this.Stoves)
}

filterSpares() {
  this.Spares = this.allProduct.filter((item:any) => {
    return (item.category.includes('Accessories. Spares' && 'Accessories, Spares'))
});
  console.log(this.Spares)
}



















































































}
