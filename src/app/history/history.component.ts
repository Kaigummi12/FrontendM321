import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Order } from '../order.model';  // Bestellmodell importieren

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit {
  orders: Order[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Bestellhistorie abrufen
    this.orders = this.productService.getOrderHistory();
  }
}