import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  deliverypage: any;

  constructor(private sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.deliverypage = this.sanitizer.bypassSecurityTrustResourceUrl('assets/deliverypage.jpg');
  }
}
