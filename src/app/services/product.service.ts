import { Injectable } from '@angular/core';

interface Product {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  getProducts() {
    return this.products;
  }

}
