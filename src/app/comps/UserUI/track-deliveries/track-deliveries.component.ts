// import { Component, OnInit } from '@angular/core';
// import { MainService } from '../../../services/main.service';
// import { ActivatedRoute } from '@angular/router';

// interface Delivery {
//   id: number;
//   origin: string;
//   destination: string;
//   status: string;
//   courier: string;
//   lastUpdated: Date;
// }

// @Component({
//   selector: 'app-track-deliveries',
//   templateUrl: './track-deliveries.component.html',
//   styleUrl: './track-deliveries.component.css'
// })
// export class TrackDeliveriesComponent implements OnInit {
//   orderId: string = '';
//   trackingData: any;

//   deliveries: Delivery[] = [
//     {
//       id: 1,
//       origin: "Cape Town, South Africa",
//       destination: "Johannesburg, South Africa",
//       status: "In Transit",
//       courier: "Aramex",
//       lastUpdated: new Date('2024-06-26')
//     },
//     {
//       id: 2,
//       origin: "Pretoria, South Africa",
//       destination: "Durban, South Africa",
//       status: "Out for Delivery",
//       courier: "DHL",
//       lastUpdated: new Date('2024-06-25')
//     },
//     {
//       id: 3,
//       origin: "Port Elizabeth, South Africa",
//       destination: "Bloemfontein, South Africa",
//       status: "Delivered",
//       courier: "PostNet",
//       lastUpdated: new Date('2024-06-24')
//     }
//   ];

//   constructor(private mainServer: MainService, private route: ActivatedRoute) {}

//   ngOnInit(): void { }
// }
