import { Controller, Get, Request } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('product')
  products() {
    return this.productService.getProducts();
  }

  @Get('product/:id')
  product(@Request() req) {
    return this.productService.getProduct(req.params.id);
  }
}
