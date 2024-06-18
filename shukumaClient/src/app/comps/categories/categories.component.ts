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

  category: string[] = ['Gas Cylinders', 'Gas Accessories', 'Stoves'];


  sortByCategory(category: string) {
    console.log(`Selected category: ${category}`);
  }


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

