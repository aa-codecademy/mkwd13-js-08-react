import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  ParseIntPipe,
  Put,
  ParseEnumPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { OrderStatus } from '../shared/types/order-status.enum';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiBody({ type: CreateOrderDto })
  @ApiCreatedResponse({
    description: 'The order has been successfully created.',
    type: Order,
  })
  create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({ status: 200, description: 'List of orders', type: [Order] })
  findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Put(':id/status/:status')
  @ApiOperation({ summary: 'Update the status of an order' })
  @ApiParam({ name: 'id', type: Number, description: 'Order ID' })
  @ApiParam({
    name: 'status',
    enum: OrderStatus,
    description: 'New order status',
  })
  @ApiResponse({
    status: 200,
    description: 'Order status updated',
    type: Order,
  })
  @ApiNotFoundResponse({ description: 'Order not found' })
  @ApiBadRequestResponse({ description: 'Invalid status transition' })
  status(
    @Param('id', ParseIntPipe) id: number,
    @Param('status', new ParseEnumPipe(OrderStatus)) status: OrderStatus,
  ): Promise<Order> {
    return this.ordersService.status(id, status);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an order' })
  @ApiParam({ name: 'id', type: Number, description: 'Order ID' })
  @ApiResponse({ status: 200, description: 'Order deleted' })
  remove(@Param('id') id: string): Promise<void> {
    return this.ordersService.remove(+id);
  }
}
