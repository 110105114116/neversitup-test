import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { ProductService } from './products/product.service';
import { ProductController } from './products/product.controller';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';

@Module({
  imports: [],
  controllers: [
    AuthController,
    UsersController,
    ProductController,
    OrderController
  ],
  providers: [
    AuthService,
    UsersService,
    ProductService,
    OrderService
  ],
})
export class AppModule {}
