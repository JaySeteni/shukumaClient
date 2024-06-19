import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent implements OnInit {
products: any;
productId: string | null | undefined;

constructor ( private route: ActivatedRoute,
  private mainServer: MainService ){ }

  ngOnInit(): void {
    this.getOneProduct()
  }
    getOneProduct(){

    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.products = this.mainServer.getOneProduct(productId);
    });

}
}
