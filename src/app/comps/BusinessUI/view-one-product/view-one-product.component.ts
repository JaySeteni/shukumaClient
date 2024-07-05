import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-view-one-product',
  templateUrl: './view-one-product.component.html',
  styleUrl: './view-one-product.component.css'
})
export class ViewOneProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
