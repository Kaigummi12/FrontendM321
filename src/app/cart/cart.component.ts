import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart$: Observable<Product[]>;
  totalPrice: number = 0;

  constructor(private productService: ProductService, private router: Router) {
    this.cart$ = this.productService.cart$;
    this.cart$.subscribe((products) => {
      this.totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    });
  }

  // Bestellung abschließen
  completeOrder(paymentMethod: string): void {
    this.productService.completeOrder(paymentMethod);
    alert('Bestellung erfolgreich abgeschlossen!');
    this.router.navigate(['/success']);
  }
}