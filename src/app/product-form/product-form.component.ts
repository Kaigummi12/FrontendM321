import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  product: Product = { id: 0, name: '', price: 0 };

  constructor(private productService: ProductService) {}

  addProduct() {
    const newProduct = { ...this.product, id: Date.now() }; // Erzeugt eine eindeutige ID
    this.productService.addProduct(newProduct);
    this.product = { id: 0, name: '', price: 0 }; // Formular zurücksetzen
  }
}