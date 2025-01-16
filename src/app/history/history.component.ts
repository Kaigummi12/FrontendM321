import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Order } from '../order.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
})
export class HistoryComponent {
  orders: Order[] = [];
  showProducts: boolean[] = []; // Um anzugeben, welche Bestellungen das Dropdown anzeigen

  constructor(private productService: ProductService) {
    this.orders = this.productService.getOrderHistory();
  }

  toggleProducts(index: number) {
    this.showProducts[index] = !this.showProducts[index];
  }
}