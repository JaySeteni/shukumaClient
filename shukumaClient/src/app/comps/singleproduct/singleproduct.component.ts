import { Component ,OnInit} from '@angular/core';
import { mockData } from '../../../mock-data'

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent {
    products: any = mockData

    ngOnInit() :any

  }


