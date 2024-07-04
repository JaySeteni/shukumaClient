import { Component, OnInit } from '@angular/core';
// import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrl: './single-order.component.css'
})
export class SingleOrderComponent implements OnInit {

  date = new Date().toLocaleString()
  total:any
  orderedItems: any
  orderNumber: any = "";
  orderId: any = ""
  user: any = "";

  ngOnInit(): void {
    this.total = JSON.parse(`${localStorage.getItem('Total')}`)
    this.orderedItems = JSON.parse(`${localStorage.getItem('CartItems')}`) 
    this.orderId = 1234564;
    localStorage.setItem("orderId", this.orderId);
    console.log(this.orderId)
  }
  
 

  // generateUniqueOrderNumber(): string {
  //   return uuidv4(); // Use UUID v4 for globally unique identifiers
  // }

}

