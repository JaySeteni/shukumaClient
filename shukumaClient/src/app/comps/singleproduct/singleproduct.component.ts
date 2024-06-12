import { Component, Input } from '@angular/core';
import { Product } from '../../product'

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent {
    @Input() product!: Product;
  }
