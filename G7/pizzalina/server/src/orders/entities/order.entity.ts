import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Pizza } from '../../pizzas/entities/pizza.entity';
import { OrderStatus } from '../../shared/types/order-status.enum';
import { ApiProperty } from '@nestjs/swagger';
import { CustomerDto } from '../dto/customer.dto';

@Entity()
export class Order {
  @ApiProperty({ example: 1, description: 'Unique identifier for the order' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: CustomerDto, description: 'Customer information' })
  @Column('jsonb')
  customer: CustomerDto;

  @ApiProperty({
    type: () => [Pizza],
    description: 'List of pizzas in the order',
  })
  @ManyToMany(() => Pizza)
  @JoinTable()
  pizzas: Pizza[];

  @ApiProperty({ example: 19.99, description: 'Total order price' })
  @Column('decimal', {
    precision: 7,
    scale: 2,
    transformer: {
      to(data: number): number {
        return data;
      },
      from(data: string): number {
        return parseFloat(data);
      },
    },
  })
  total: number;

  @ApiProperty({
    enum: OrderStatus,
    example: OrderStatus.PENDING,
    description: 'Current status of the order',
  })
  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  status: OrderStatus;

  @ApiProperty({
    example: '2024-01-01T00:00:00.000Z',
    description: 'Order creation timestamp',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    example: '2024-01-01T00:00:00.000Z',
    description: 'Order last update timestamp',
  })
  @UpdateDateColumn()
  updatedAt: Date;
}
