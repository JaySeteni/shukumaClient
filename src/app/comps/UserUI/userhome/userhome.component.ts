import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product-service/product.service';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent implements OnInit {
  allProducts : any = []

  // products: any;


  constructor(
    private _productService: ProductService
  ){}

  ngOnInit(): void {
    this.getAllProducts()
}

getAllProducts(){

  this._productService.getAllProducts().subscribe({
    next: (data: any) =>{
    this.allProducts = data.products
      console.log(this.allProducts)
    },
    error: err=>{
      console.log(err)
    }
  })
}

}
