import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent implements OnInit {
product: any;
 
constructor ( private route: ActivatedRoute,
  private mainService: MainService ){ }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.product = this.mainService.getProduct(productId);
    });
  }
}
