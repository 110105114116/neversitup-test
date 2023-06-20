import { Injectable } from '@nestjs/common';
import * as users from '../auth/user.json';
import * as orders from '../order/order.json';

@Injectable()
export class UsersService {
  getProfile(id: number) {
    const user = users.find((user) => user.id == id);
    if (!user) return 'User not found';
    if (!user.isActive) return 'User is not active';

    return user;
  }

  getOrder(id: number) {
    const userOrder = []
    orders.map((order) => {
      if (order.userId == id) {
        userOrder.push(order)
      }
    });

    return userOrder;
  }
}
