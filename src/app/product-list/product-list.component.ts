import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.products$;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }
}