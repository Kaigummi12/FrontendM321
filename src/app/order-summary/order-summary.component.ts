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
    if (this.selectedPaymentMethod) {
      this.productService.completeOrder(this.selectedPaymentMethod); // Zahlungsmethode übergeben
      alert('Bestellung erfolgreich abgeschlossen!');
      this.router.navigate(['/success']);
    } else {
      alert('Bitte Zahlungsmethode auswählen!');
    }
  }
}