import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  orders: any[] = [];  // Speichert die Bestellungen

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // Hole den Bestellverlauf vom Produktservice
    this.orders = this.productService.getOrderHistory();
  }

  // Funktion, um die Details der Bestellung anzuzeigen/zu verbergen
  toggleDetails(orderId: number) {
    const order = this.orders.find(order => order.id === orderId);
    if (order) {
      order.showDetails = !order.showDetails;  // Details umschalten
    }
  }
}