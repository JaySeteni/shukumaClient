import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockData } from '../../../mock-data';

@Component({
  selector: 'app-single-product',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleProductComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.product = mockData.find(p => p.id === parseInt(productId!));
  }
}


