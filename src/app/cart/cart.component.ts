import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart$: Observable<Product[]>;
  totalPrice: number = 0;

  constructor(private productService: ProductService) {
    this.cart$ = this.productService.cart$;
    this.cart$.subscribe((products) => {
      this.totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    });
  }

  clearCart() {
    this.productService.clearCart();
  }
}