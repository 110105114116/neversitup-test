import { Injectable } from '@nestjs/common';
import * as orders from './order.json';
import * as products from '../products/products.json';
import * as users from '../auth/user.json';
import * as dayjs from 'dayjs';
import * as fs from 'fs';

@Injectable()
export class OrderService {
  createOrder(userId: number, productId: number) {
    const user = users.find((user) => user.id == userId);
    const product = products.find((product) => product.id == productId);
    if (!user) return 'User not found';
    if (!product) return 'Product not found';

    const orderDetail = {
      id: orders.length + 1,
      userId,
      productId,
      status: 'pending',
      createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
    orders.push(orderDetail);

    fs.writeFileSync('./src/order/order.json', JSON.stringify(orders));

    return orderDetail;
  }

  cancelOrder(id: number) {
    const order = orders.find((order) => order.id == id);
    if (!order) return 'Order not found';

    order.status = 'canceled';
    order.updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss');

    fs.writeFileSync('./src/order/order.json', JSON.stringify(orders));

    return {
      message: 'Order canceled successfully',
      order
    };
  }

  getOrders() {
    const orderPending = []
    orders.map((order) => {
      if (order.status == 'pending') {
        orderPending.push(order)
      }
    });

    return orderPending
  }
}