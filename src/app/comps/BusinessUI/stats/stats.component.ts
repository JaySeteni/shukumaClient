import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  openedBox: string | null = null;

  toggleBox(box: string): void {
    this.openedBox = this.openedBox === box ? null : box;
  }
}
