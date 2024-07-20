import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product-service/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-one-product',
  templateUrl: './view-one-product.component.html',
  styleUrl: './view-one-product.component.css'
})
export class ViewOneProductComponent implements OnInit {
  selectedProduct: any = null; // Assume this is populated elsewhere in your code
  isModalOpen = false;
  imagePreview: string | ArrayBuffer | null = null;
  errMessage: string | null = null;


  constructor( private route: ActivatedRoute, private _productService: ProductService, private location: Location) { }

  goBack() {
    this.location.back();
  }
  
  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
      this._productService.getProduct(id).subscribe({
        next: (res: any) => {
          console.log(res)
          this.selectedProduct = res.product;
        },
        error: (err: any) => {
          console.error("An error occurred while fetching product:", err);
        }
      });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  fileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSubmit(form: any) {
    if (form.valid) {
      // Handle form submission logic here
      console.log('Form submitted:', form.value);
      this.closeModal();
    }
  }
}

