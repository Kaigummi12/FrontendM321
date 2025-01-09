import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
})
export class OrderSummaryComponent {
  cart$: Observable<Product[]>;
  totalPrice: number = 0;
  selectedPaymentMethod: string = '';

  constructor(private productService: ProductService, private router: Router) {
    this.cart$ = this.productService.cart$;
    this.cart$.subscribe((products) => {
      this.totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    });
  }

  completeOrder() {
    alert(`Bestellung abgeschlossen mit Zahlungsmethode: ${this.selectedPaymentMethod}`);
    this.productService.clearCart(); // Warenkorb leeren
    this.router.navigate(['/success']); // Weiterleitung zum Success-Screen
  }
}