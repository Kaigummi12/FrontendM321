import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  private cart: Product[] = [];
  
  products$ = new BehaviorSubject<Product[]>(this.products);
  cart$ = new BehaviorSubject<Product[]>(this.cart);

  addProduct(product: Product) {
    this.products.push(product);
    this.products$.next(this.products);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
    this.products$.next(this.products);
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.cart$.next(this.cart);
  }

  clearCart() {
    this.cart = [];
    this.cart$.next(this.cart);
  }
}