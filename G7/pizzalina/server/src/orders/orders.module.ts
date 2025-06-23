import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Pizza } from '../pizzas/entities/pizza.entity';
import { AdminController } from './admin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Pizza])],
  controllers: [OrdersController, AdminController],
  providers: [OrdersService],
})
export class OrdersModule {}
