import { Component, OnInit, Input, OnDestroy   } from '@angular/core';
import { ProductService } from '../../../services/product-service/product.service';
import { Product } from '../../../interfaces/product';
import { ProductDbResponse } from '../../../interfaces/productDbResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent implements OnInit {
  allProducts :Product[] = []
  Cylinders :any = []
  Stoves :any = []
  Spares :any = []
  catname = "Cylinders"


  products: any;

  
  currentIndex = 0;

  private autoSlideInterval: any;

  @Input() images: string[] = ["../../../assets/customer_service_generated.jpg", "../../../assets/2287_generated.jpg","../../../assets/digitalLogistics.webp"];
  @Input() captions: string[] = [];
  @Input() interval: number = 5000;


  constructor( private _productService: ProductService, private router:Router
  ){}

  ngOnInit(): void {
    console.log("initial carousel image:", this.images[this.currentIndex]);

    this.getAllProducts();
//  this.startAutoSlide();

}

ngOnDestroy() {
  clearInterval(this.autoSlideInterval);
}
getAllProducts(){

  this._productService.getAllProducts().subscribe({
    next: (data: ProductDbResponse) =>{
    this.allProducts = data.products
      console.log(data)
      this.filterItemsByCylinders()
      this.filterStoves()
      this.filterSpares()

    },
    error: err=>{
      console.log(err)
    }
  })
}

filterItemsByCylinders() {
  this.Cylinders = this.allProducts.filter((item:any) => {
    return (item.category.includes('Cylinders'))
});
  console.log(this.Cylinders)
}

filterStoves() {
  this.Stoves = this.allProducts.filter((item:any) => {
    return (item.category.includes('Stoves'))
});
  console.log(this.Stoves)
}

filterSpares() {
  this.Spares = this.allProducts.filter((item:any) => {
    return (item.category.includes('Spares'))
});

  console.log(this.Spares)
}

getValue(value: any){
  this.catname = value
  console.log(this.catname)
  this.router.navigate([`category/`], )

}

nextSlide() {
  this.currentIndex = (this.currentIndex + 1) % this.images.length; 
  console.log("carousel length",this.images.length);
  console.log("current carousel image:", this.images[this.currentIndex]);
  console.log("current index", this.currentIndex);
}

prevSlide() {
  this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  console.log("current carousel image:", this.images[this.currentIndex]);
  console.log("current index", this.currentIndex);
}

startAutoSlide() {
  clearInterval(this.autoSlideInterval);
  this.autoSlideInterval = setInterval(() => {
    if (this.currentIndex === this.currentIndex) {
    this.nextSlide();
      console.log("next slide" + this.currentIndex);
    }

  }, 
  this.interval);
}















































































}
