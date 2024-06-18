import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
