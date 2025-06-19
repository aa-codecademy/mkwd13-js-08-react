import { Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('admin/orders')
export class AdminController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('backfill')
  @ApiOperation({ summary: 'Backfill orders' })
  @ApiResponse({ status: 200, description: 'Orders backfilled' })
  backfill() {
    return this.ordersService.backfill();
  }
}
