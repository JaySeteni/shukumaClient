import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  allProduct : any = []
  products: any;

  constructor(private mainServer: MainService){}

  ngOnInit(): void {
      this.getAllProducts()
  }
  getAllProducts(){

    this.mainServer.getAllProducts().subscribe({
      next: data =>{
      this.allProduct = data.products
        console.log(data)
      },
      error: err=>{
        console.log(err)
      }
    })
  }

}
// export class CategoriesComponent implements OnInit {
//   products: any[] = [];

//   constructor(private mainService: MainService) { }

//   ngOnInit(): void {
//     this.mainService.getAllProducts().subscribe(data => {
//       this.products = data.map((product: any) => ({
//         name: product.name,
//         imageUrl: product.imageUrl || 'default-image-url',
//         description: product.description ,
//         price : product.price
//       }));
//     });
//   }
// }

