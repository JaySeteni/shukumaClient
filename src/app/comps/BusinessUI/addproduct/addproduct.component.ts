import { Component } from '@angular/core';
import { ProductService } from '../../../services/product-service/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddProductComponent {
  productForm: FormGroup;
  image: File | null = null;
  message: string = '';

  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      images: ['', Validators.required]
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.image = event.target.files[0];
    }
  }

  submitForm() {
    if (this.productForm.invalid || !this.image) {
      this.message = 'Please fill all the required fields and upload an image.';
      return;
    }

    const formData = new FormData();
    formData.append('name', this.productForm.get('name')?.value);
    formData.append('description', this.productForm.get('description')?.value);
    formData.append('price', this.productForm.get('price')?.value);
    formData.append('images', this.image);

    this.productService.createProduct(formData).subscribe(
      response => {
        this.message = 'Product created successfully!';
        this.productForm.reset();
        this.image = null;

        console.log(this.productForm)
      },
      error => {
        this.message = 'Error creating product';
        console.error(error);
      }
    );
  }
}


