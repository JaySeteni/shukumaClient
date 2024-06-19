import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent implements OnInit {
  product : any = []
  products : any;

constructor ( private route: ActivatedRoute,
  private mainServer: MainService ){ }

  ngOnInit(): void {
    this.getOneProduct()
  }
  
  getOneProduct(){
    const single = this.route.snapshot.paramMap.get('id')
    this.mainServer.getOneProduct(single).subscribe({
      next: data =>{
        this.product = data.products
      }
    })
  }
}
