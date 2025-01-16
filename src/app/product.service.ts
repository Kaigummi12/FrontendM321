import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  private cart: Product[] = [];
  private orders: Order[] = [];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  products$ = this.productsSubject.asObservable();

  private cartSubject = new BehaviorSubject<Product[]>(this.cart);
  cart$ = this.cartSubject.asObservable();

  constructor() {}

  // Methode, um Produkte hinzuzufügen
  addProduct(product: Product): void {
    this.products.push(product);
    this.productsSubject.next(this.products);
  }

  // Methode, um Produkte zum Warenkorb hinzuzufügen
  addToCart(product: Product): void {
    this.cart.push(product);
    this.cartSubject.next(this.cart);
  }

  // Methode, um den Warenkorb zu leeren
  clearCart(): void {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }

  // Methode, um eine Bestellung abzuschließen
  completeOrder(paymentMethod: string): void {
    const order: Order = {
      id: this.orders.length + 1,
      date: new Date(),
      total: this.cart.reduce((sum, product) => sum + product.price, 0),
      items: [...this.cart], // Speichern der bestellten Produkte
    };
    this.orders.push(order);
    this.clearCart();
  }

  // Methode, um den Bestellverlauf zu bekommen
  getOrderHistory(): Order[] {
    return this.orders;
  }
}