import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  constructor() { }

  private products: string[] = ["123","321","Product", "product", "prod name"];

  getProducts() {
    return this.products;
  }

  addProduct(product: string): void {
    this.products.push(product);
  }

  filterProducts(filterText: string): string[] {
    return this.products.filter(product =>
      product.toLowerCase().includes(filterText.toLowerCase()));
  }
}