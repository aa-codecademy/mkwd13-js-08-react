import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { Pizza } from '../pizzas/entities/pizza.entity';
import { OrderStatus } from '../shared/types/order-status.enum';
import { faker } from '@faker-js/faker';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Pizza)
    private readonly pizzaRepository: Repository<Pizza>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const pizzas = await this.pizzaRepository.find({
      where: { id: In(createOrderDto.pizzaIds) },
    });

    if (pizzas.length !== createOrderDto.pizzaIds.length) {
      throw new NotFoundException('One or more pizzas not found');
    }

    const total = pizzas.reduce((acc, pizza) => acc + pizza.price, 0);

    const order = this.orderRepository.create({
      customer: createOrderDto.customer,
      pizzas,
      total,
      status: OrderStatus.PENDING,
    });
    return this.orderRepository.save(order);
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find({ relations: ['pizzas'] });
  }

  async status(id: number, status: OrderStatus): Promise<Order> {
    const order = await this.orderRepository.findOne({ where: { id } });

    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    switch (status) {
      case OrderStatus.PENDING:
        throw new BadRequestException(
          `Order cannot be updated from ${order.status} to ${OrderStatus.PENDING}`,
        );
      case OrderStatus.CONFIRMED: {
        if (order.status !== OrderStatus.PENDING) {
          throw new BadRequestException(
            `Order cannot be updated from ${order.status} to ${OrderStatus.CONFIRMED}`,
          );
        }
        order.status = OrderStatus.CONFIRMED;
        break;
      }
      case OrderStatus.DELIVERED: {
        if (order.status !== OrderStatus.CONFIRMED) {
          throw new BadRequestException(
            `Order cannot be updated from ${order.status} to ${OrderStatus.DELIVERED}`,
          );
        }
        order.status = OrderStatus.DELIVERED;
        break;
      }
      case OrderStatus.CANCELLED: {
        if (order.status === OrderStatus.DELIVERED) {
          throw new BadRequestException(
            `Order cannot be cancelled because it has already been delivered`,
          );
        }
        order.status = OrderStatus.CANCELLED;
        break;
      }
      default:
        throw new BadRequestException(`Invalid status`);
    }

    return this.orderRepository.save(order);
  }

  async remove(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }

  // ADMIN ONLY

  async backfill() {
    // Fetch all pizzas
    const pizzas = await this.pizzaRepository.find();

    if (!pizzas.length) throw new NotFoundException('No pizzas found');

    const statuses = [
      OrderStatus.PENDING,
      OrderStatus.CONFIRMED,
      OrderStatus.DELIVERED,
      OrderStatus.CANCELLED,
    ];

    const orders: Partial<Order>[] = [];
    for (let i = 0; i < 100; i++) {
      // Random customer
      const customer = {
        name: faker.person.fullName(),
        address: faker.location.streetAddress(),
        phone: faker.phone.number(),
      };
      // Random pizzas (1-5 unique)
      const pizzaCount = faker.number.int({ min: 1, max: 5 });
      const shuffled = faker.helpers.shuffle(pizzas);
      const selectedPizzas = shuffled.slice(0, pizzaCount);
      // Calculate total
      const total = selectedPizzas.reduce(
        (sum: number, p: Pizza) => sum + Number(p.price),
        0,
      );
      // Random status
      const status = faker.helpers.arrayElement(statuses);
      orders.push({
        customer,
        pizzas: selectedPizzas,
        total,
        status,
      });
    }
    // Bulk insert
    await this.orderRepository.save(orders);
    return { message: `${orders.length} random orders created` };
  }
}
