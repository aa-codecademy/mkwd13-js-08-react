import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { PizzaIngredientDto } from '../dto/pizza-ingredient.dto';
import { PizzaSize } from '../../shared/types/pizza-size';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Pizza {
  @ApiProperty({ example: 1, description: 'Unique identifier for the pizza' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Margherita', description: 'Name of the pizza' })
  @Column()
  name: string;

  @ApiProperty({
    example: 'Classic pizza with tomato and cheese',
    description: 'Description of the pizza',
  })
  @Column('text')
  description: string;

  @ApiProperty({ example: 9.99, description: 'Price of the pizza' })
  @Column('decimal', {
    precision: 5,
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
  price: number;

  @ApiProperty({
    example: 'https://example.com/image.jpg',
    description: 'Image URL of the pizza',
  })
  @Column({ name: 'image_url' })
  imageUrl: string;

  @ApiProperty({
    type: [PizzaIngredientDto],
    description: 'List of ingredients',
  })
  @Column('json', { name: 'ingredients' })
  ingredients: PizzaIngredientDto[];

  @ApiProperty({ example: true, description: 'Availability of the pizza' })
  @Column({ default: true, name: 'is_available' })
  isAvailable: boolean;

  @ApiProperty({
    enum: PizzaSize,
    example: PizzaSize.MEDIUM,
    description: 'Size of the pizza',
  })
  @Column({
    type: 'enum',
    enum: PizzaSize,
    default: PizzaSize.MEDIUM,
    name: 'size',
  })
  size: PizzaSize;

  @ApiProperty({ example: 800, description: 'Calories in the pizza' })
  @Column('int', { default: 0 })
  calories: number;

  @ApiProperty({
    example: '2024-01-01T00:00:00.000Z',
    description: 'Creation timestamp',
  })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({
    example: '2024-01-01T00:00:00.000Z',
    description: 'Last update timestamp',
  })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ApiProperty({
    example: null,
    description: 'Deletion timestamp (null if not deleted)',
  })
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
