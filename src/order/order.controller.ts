import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('order/add')
  products(
    @Body('userId') userId: number,
    @Body('productId') productId: number,
  ) {
    return this.orderService.createOrder(userId, productId);
  }

  @Post('order/cancel/:id')
  cancelOrder(
    @Request() req,
  ) {
    return this.orderService.cancelOrder(req.params.id);
  }

  @Get('order')
  getOrders() {
    return this.orderService.getOrders();
  }
  
}
