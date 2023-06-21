import { Body, Controller, Get, Post, Put, Request } from '@nestjs/common';
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

  @Put('order/cancel/:id')
  cancelOrder(
    @Request() req,
  ) {
    return this.orderService.cancelOrder(req.params.id);
  }

  @Get('orders')
  getOrders() {
    return this.orderService.getOrders();
  }
  
}
