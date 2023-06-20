import { Injectable } from '@nestjs/common';
import * as products from './products.json';

@Injectable()
export class ProductService {
  getProducts() {
    return products;
  }

  getProduct(id: number) {
    const product = products.find((product) => product.id == id);
    if (!product) return 'Product not found';

    return product;
  }
}