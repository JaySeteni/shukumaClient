import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  currentIndex: number = 0;
  totalSlides!: number;

  ngAfterViewInit(): void {
    const items = document.querySelectorAll('.carousel-item');
    this.totalSlides = items.length;
    this.showSlide(this.currentIndex);
  }

  showSlide(index: number): void {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.totalSlides - 1 : this.currentIndex - 1;
    this.showSlide(this.currentIndex);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex === this.totalSlides - 1) ? 0 : this.currentIndex + 1;
    this.showSlide(this.currentIndex);
  }
}
