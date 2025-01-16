import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';

interface Order {
  id: number;
  date: Date;
  total: number;
  items: Product[];
  paymentMethod: string;
}

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

  // Produkte hinzufügen
  addProduct(product: Product): void {
    product.id = this.products.length + 1; // Neue ID zuweisen
    this.products.push(product);
    this.productsSubject.next(this.products);
  }

  // Produkt zum Warenkorb hinzufügen
  addToCart(product: Product): void {
    this.cart.push(product);
    this.cartSubject.next(this.cart);
  }

  // Bestellung abschließen
  completeOrder(paymentMethod: string): void {
    const order: Order = {
      id: this.orders.length + 1,
      date: new Date(),
      total: this.cart.reduce((sum, product) => sum + product.price, 0),
      items: this.cart,
      paymentMethod,
    };
    this.orders.push(order);
    this.clearCart();
  }

  // Bestellhistorie abrufen
  getOrderHistory(): Order[] {
    return this.orders;
  }

  // Warenkorb leeren
  clearCart(): void {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }
}