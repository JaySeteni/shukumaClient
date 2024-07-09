import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../services/orders/orders.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  date = new Date().toLocaleString()
  total:any
  orderedItems: any
  constructor(private orderService : OrdersService ){}

  ngOnInit(): void {
    this.total = JSON.parse(`${localStorage.getItem('Total')}`)
    this.orderedItems = JSON.parse(`${localStorage.getItem('CartItems')}`) 
  }

  // getOrder(){
  //   this.orderService.fetchOrder().use
  // }
}
