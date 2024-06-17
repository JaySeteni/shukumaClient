import { Component, OnInit, Renderer2 } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  
shouldDisplayThemeToggle(): any {
throw new Error('Method not implemented.');
}
  isDarkTheme = false;
  delivery: any;

  constructor(private renderer: Renderer2, private sanitizer: DomSanitizer,) {}

  ngOnInit(): void {
  const imagePath = 'assets/delivery.jpg';
  this.delivery = this.sanitizer.bypassSecurityTrustResourceUrl(imagePath);

}

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}

