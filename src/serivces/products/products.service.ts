import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/products/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 2;
  private products: Product[] = [
    {
      id: 1,
      name: 'Agua embotellada ciel',
      description: 'Agua purificada de 1 litro',
      price: 20,
      stock: 200,
      image: null,
      deleted: false,
      active: true,
      private: false,
    },
    {
      id: 2,
      name: 'Rufles',
      description: 'Papa de sabritas sabor original, colo azul',
      price: 15,
      stock: 10,
      image: null,
      deleted: false,
      active: true,
      private: false,
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    return this.products.find((r) => r.id === id);
  }
  create(payload: any) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const updateProduct = Object.assign(product, payload);
      this.products = this.products.filter((r) => r.id !== id);
      this.products.push(updateProduct);
      return updateProduct;
    }
    return false;
  }
  delete(id: number) {
    this.products = this.products.filter((r) => r.id !== id);
    return id;
  }
}
