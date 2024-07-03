import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../services/main.service';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent implements OnInit {
  allProduct : any = []

  products: any;


  constructor(
    private mainServer: MainService
  ){}

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
