import { Component, OnInit } from '@angular/core';
import { Order } from '../../../interfaces/order';
import { OrdersService } from '../../../services/orders/orders.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrl: './view-order.component.css'
})
export class ViewOrderComponent  implements OnInit{

  constructor(private order_service: OrdersService){}

  order?:Order;
  ButtonText:string = "Complete Order"

  ngOnInit(): void {
    this.order_service.mGetPassOrder().subscribe((order:Order) => {
      this.order = order
      if(order.status == 'pending'){
        this.ButtonText = 'Start Order'

      }
    })
  }

  updateOrderStatus(){
    
  }
}
