export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface Order {
  id: number;
  date: Date;
  total: number;
  items: Product[];
}