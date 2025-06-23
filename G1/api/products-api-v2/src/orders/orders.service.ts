import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrderDetails } from './entities/order-details.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepo: Repository<Order>,
    @InjectRepository(OrderDetails)
    private orderDetailsRepo: Repository<OrderDetails>,
    @InjectEntityManager() private entityManager: EntityManager,
  ) {}

  getAllOrders() {
    return this.ordersRepo.find({ loadRelationIds: true });
  }

  async getOrderById(id: number) {
    const foundOrder = await this.ordersRepo.findOne({
      where: { id },
      relations: {
        orderDetailsArr: {
          product: true,
        },
      },
    });

    if (!foundOrder) throw new NotFoundException('Order not found');

    return foundOrder;
  }

  async createOrder(orderData: CreateOrderDto) {
    return this.entityManager.transaction(async (tem: EntityManager) => {
      const createdOrder = await tem.withRepository(this.ordersRepo).save({
        address: orderData.address,
        date: orderData.date,
        fullName: orderData.fullName,
        phoneNumber: orderData.phoneNumber,
      });

      await tem.withRepository(this.orderDetailsRepo).save(
        orderData.products.map((productDetails) => ({
          orderId: createdOrder.id,
          productId: productDetails.productId,
          quantity: productDetails.quantity,
        })),
      );

      await tem.query(
        `
        update "order" o 
        set amount = (select  SUM((od.quantity * p.price))  from "order" o
        left join order_details od on od."orderId" = o.id
        left join product p on od."productId" = p.id)
        where o.id = $1;
        `,
        [createdOrder.id],
      );
    });
  }
}
