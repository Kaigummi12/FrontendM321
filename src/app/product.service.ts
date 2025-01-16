import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Verwenden von BehaviorSubject für cart, damit es ein Observable ist
  private cartSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  cart$: Observable<Product[]> = this.cartSubject.asObservable();
  orders: any[] = [];  // Array für Bestellungen

  constructor() {}

  // Produkte zum Warenkorb hinzufügen
  addToCart(product: Product) {
    const currentCart = this.cartSubject.value;
    this.cartSubject.next([...currentCart, product]);
  }

  // Warenkorb leeren
  clearCart() {
    this.cartSubject.next([]);
  }

  // Bestellungen anzeigen
  getOrderHistory() {
    return this.orders;
  }

  // Bestellung abschließen
  completeOrder(paymentMethod: string): void {
    const order = {
      id: this.orders.length + 1,
      product: this.cartSubject.value.map(product => ({
        name: product.name,
        price: product.price,
      })),
      totalPrice: this.cartSubject.value.reduce((sum, product) => sum + product.price, 0),
      date: new Date(),
      paymentMethod: paymentMethod,
      showDetails: false, // Details für jede Bestellung umschaltbar
    };

    this.orders.push(order);  // Bestellung in die Historie einfügen
    this.clearCart(); // Warenkorb nach Bestellung leeren
  }
}