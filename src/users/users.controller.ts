import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('user/profile/:id')
  register(
    @Request() req
  ) {
    return this.usersService.getProfile(req.params.id);
  }

  @Get('user/order/:id')
  getOrder(
    @Request() req
  ) {
    return this.usersService.getOrder(req.params.id);
  }
}
