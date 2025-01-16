import { Product } from './product.model';

export interface Order {
  id: number;
  date: Date;
  total: number;
  items: Product[]; // Liste von bestellten Produkten
}