export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  deleted: boolean;
  active: boolean;
  private: boolean;
}
