import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../services/orders/orders.service';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../../../services/cart-service/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup ;
  orderData: any;
  // date = new Date().toLocaleString()
  // total:any
  // orderedItems: any
  // orderTotal$ = new BehaviorSubject<number>(0)

  constructor(private orderService : OrdersService, private cartService: CartService,   private fb: FormBuilder){}

    ngOnInit (){
      this.orderForm = this.fb.group({
        userId: ['', Validators.required],
        cartId: ['', Validators.required],
        address: ['', Validators.required]
      });
    }
  
  
 
  onSubmit() {
    if (this.orderForm.valid) {
      this.orderService.createOrder(this.orderForm.value).subscribe(
        response => {
          console.log('Order created successfully', response);
        },
        error => {
          console.error('Error creating order', error);
        }
      );
    }
  }
}


  // ngOnInit(): void {
  //   this.total = JSON.parse(`${localStorage.getItem('Total')}`)
  //   this.getOrder()

  // }

  // getOrder(){
  //   const userId = "66865064ad57296a97884bc3"
  //   const cartId = "66865190d6231df3b77815f9"
  //   this.orderService.fetchOrder(cartId).subscribe({
  //     next: (res)=>{
  //       console.log(res)
  //       this.orderedItems = res
        
  //     },error: (err)=>{
  //       console.error("or",{userId, cartId} ,err)
  //     },
  //   })
  // }
