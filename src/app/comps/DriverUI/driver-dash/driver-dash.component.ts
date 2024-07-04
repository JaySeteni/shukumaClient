import { Component } from '@angular/core';

@Component({
  selector: 'app-driver-dash',
  templateUrl: './driver-dash.component.html',
  styleUrl: './driver-dash.component.css'
})
export class DriverDashComponent {

  orderData = [
    {
      orderNo:"SHU23456789",
      name: "Sfiso",
      location: {lat:345678, lon:3456789},
      address:"106 camps bay honn",
      item:"1kg",
      status:"out-for-delivery",
      pay_mode: "cash",
      price:200,
  }, 
  {
    orderNo:"SHU87867",
    name: "ben",
    location: {lat:3421678, lon:34567389},
    address:"17 philippi",
    item:"9kg",
    status:"out-for-delivery",
    pay_mode: "card",
    price:600,
  }, 
  {
    orderNo:"SHU987656",
    name: "mike",
    location: {lat:66765267, lon:232328},
    address:"phillipi village",
    item:"19kg",
    status:"delivered",
    pay_mode: "cash",
    price:200,
  }, 
  {
    orderNo:"SHU23456789",
    name: "Sfiso",
    location: {lat:345678, lon:3456789},
    address:"106 camps bay honn",
    item:"1kg",
    status:"out-for-delivery",
    pay_mode: "cash",
    quantity: 1,
    price:200,
}, 
{
  orderNo:"SHU87867",
  name: "ben",
  location: {lat:3421678, lon:34567389},
  address:"17 philippi",
  item:"9kg",
  status:"out-for-delivery",
  pay_mode: "card",
  quantity: 1,
  price:600,
}, 
{
  orderNo:"SHU987656",
  name: "mike",
  location: {lat:66765267, lon:232328},
  address:"phillipi village",
  item:"19kg",
  status:"delivered",
  pay_mode: "cash",
  quantity: 1,
  price:200,
}, 
]

}