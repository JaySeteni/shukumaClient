import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart-service/cart.service';
import { of } from 'rxjs';

const mockOrders: any[] = [
  {
    id: 1,
    orderNumber: '#ORD0001',
    items: [
      { name: '5kg Gas cylinder', quantity: 1, price: 199.99 },
      { name: 'Gas defribillator', quantity: 1, price:124.99 },
    ],
    total: 349.99,
    status: 'placed',
    createdAt: new Date('2024-06-25T10:00:00'),
  },
  {
    id: 2,
    orderNumber: '#ORD0002',
    items: [
      { name: 'T-Shirt', quantity: 3, price: 199.99 },
      { name: 'Water Bottle', quantity: 1, price: 14.95 },
    ],
    total: 74.92,
    status: 'shipped',
    createdAt: new Date('2024-06-20T15:30:00'),
  },
  {
    id: 3,
    orderNumber: '#ORD0003',
    items: [
      { name: 'gas Tank', quantity: 1, price: 120.00 },
    ],
    total: 74.92,
    status: 'shipped',
    createdAt: new Date('2024-06-20T15:30:00'),
  },

];

@Component({
  selector: 'app-cus-orders',
  templateUrl: './cus-orders.component.html',
  styleUrl: './cus-orders.component.css',
})
export class CusOrdersComponent implements OnInit {
  allOrders: any[] = mockOrders;

  constructor() {}

  ngOnInit(): void {
    this.getAllOrders();
    console.log(this.allOrders)
  }

  getAllOrders() {
    return of(mockOrders);
  }
}
