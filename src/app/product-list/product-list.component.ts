import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products: Product[] = [];
  newProduct: Product = { id: 0, name: '', price: 0 };

  constructor(private productService: ProductService) {
    // Hole die Produktliste vom Service
    this.productService.products$.subscribe((products) => {
      this.products = products;
    });
  }

  // Methode zum Hinzufügen eines Produkts
  addProduct(): void {
    if (this.newProduct.name && this.newProduct.price > 0) {
      this.productService.addProduct(this.newProduct);
      this.newProduct = { id: 0, name: '', price: 0 }; // Zurücksetzen nach dem Hinzufügen
    } else {
      alert('Bitte alle Felder ausfüllen!');
    }
  }

  // Methode, um Produkt in den Warenkorb zu legen
  addToCart(product: Product): void {
    this.productService.addToCart(product); // Produkt zum Warenkorb hinzufügen
  }
}