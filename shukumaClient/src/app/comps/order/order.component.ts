import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  date = new Date().toLocaleString()
  total:any
  orderedItems: any
  ngOnInit(): void {
    this.total = JSON.parse(`${localStorage.getItem('Total')}`)
    this.orderedItems = JSON.parse(`${localStorage.getItem('CartItems')}`) 
  }
}
