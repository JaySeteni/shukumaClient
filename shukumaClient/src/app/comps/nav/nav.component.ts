import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private router: Router) {}

  navigate(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const route = selectElement.value;
    this.router.navigate([`/${route}`]);
  }
}
