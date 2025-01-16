import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(public productService: ProductService) {
    // Hinzufügen der Produkte
    this.products = [
      { id: 1, name: 'Grafikkarte', price: 800 },
      { id: 2, name: 'CPU', price: 500 },
      { id: 3, name: 'RAM', price: 200 },
      { id: 4, name: 'Mainboard', price: 400 },
      { id: 5, name: 'Maus', price: 50 },
      { id: 6, name: 'Headset', price: 40 },
      { id: 7, name: 'Mikrofon', price: 60 },
    ];
  }
}