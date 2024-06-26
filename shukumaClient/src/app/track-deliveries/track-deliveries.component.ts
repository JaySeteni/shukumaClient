import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-track-deliveries',
  templateUrl: './track-deliveries.component.html',
  styleUrl: './track-deliveries.component.css'
})
export class TrackDeliveriesComponent implements OnInit {
  orderId: string = '';
  trackingData: any;

  constructor(private mainServer: MainService, private route: ActivatedRoute) {}

  ngOnInit(): void { }
  getTrackingInfo() {
    // Call your service method to fetch tracking data using the order ID
    this.mainServer.getTrackingInfo(this.orderId)
      .subscribe((data: any) => {
        this.trackingData = data;
      });
  }
}
