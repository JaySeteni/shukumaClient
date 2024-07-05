import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product-service/product.service';
import { Product } from '../../../interfaces/product';

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
    next: (data: Product[]) =>{
    this.allProducts = data
      console.log(data)
    },
    error: err=>{
      console.log(err)
    }
  })
}

}
