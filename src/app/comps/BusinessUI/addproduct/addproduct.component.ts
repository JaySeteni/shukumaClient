import { Component } from '@angular/core';
import { ProductService } from '../../../services/product-service/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddProductComponent {
  product:any = {
  category: "",
  title: "",
  description: "",
  price: "",
  imageUrl: "",
  quantity: "",

}
selectedFile!: File;
reader!: FileReader
imagePreview:any

  constructor(
    private productService: ProductService) {}

    onSubmit(form: NgForm) {
      const formData = new FormData();

      for (let key in this.product) {
        if (key !== 'images') {
          formData.append(key, this.product[key]);
        }
      }
      formData.append('imageUrl', this.selectedFile)

      console.log(formData)
      // for (let i = 0; i < this.product.images.length; i++) {
      //   formData.append('images', this.product.images[i]);
      // }
      this.productService.createProduct(formData).subscribe({
        next: response  => {
          console.log('Product added successfully', response);
          form.reset();
        },
        error: error => {
          console.error('Error adding product',formData, error);
         }
     });
     }

    //  onFileSelected(event: any) {
    //   if (event.target.files) {
    //       this.product.images.file;
    //       console.log(this.product.images.file)
    //     }
    //   }

      fileSelect(event: any) {
        if (event.target.files[0]) {
          this.selectedFile = event.target.files[0];
          this.reader = new FileReader();
          this.reader.readAsDataURL(this.selectedFile);
    
          this.reader.onload = (event: any) => {
            this.imagePreview = event.target.result;
            console.log(this.imagePreview)
    
            
          };
    
          
          
        }
      }
    }









