import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsNumber,
  IsString,
  IsEnum,
  IsBoolean,
  Min,
} from 'class-validator';
import { OrderDirection } from '../../shared/types/order-direction.dto';
import { PizzaOrderByField } from '../../shared/types/pizza-order-by-field.enum';
import { Pizza } from '../entities/pizza.entity';
import { Type } from 'class-transformer';

export class PizzaQueryDto {
  @ApiPropertyOptional({
    description: 'Page number for pagination',
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  page?: number = 1;

  @ApiPropertyOptional({
    description: 'Items per page for pagination',
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  limit?: number = 10;

  @ApiPropertyOptional({
    description: 'Order by field',
    enum: PizzaOrderByField,
  })
  @IsOptional()
  @IsEnum(PizzaOrderByField)
  orderBy?: PizzaOrderByField = PizzaOrderByField.ID;

  @ApiPropertyOptional({ description: 'Order direction', enum: OrderDirection })
  @IsOptional()
  @IsEnum(OrderDirection)
  order?: OrderDirection = OrderDirection.ASC;

  @ApiPropertyOptional({
    description: 'Search by pizza name or description',
    type: String,
  })
  @IsOptional()
  @IsString()
  searchTerm?: string;

  @ApiPropertyOptional({ description: 'Filter by availability', type: Boolean })
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @ApiPropertyOptional({ description: 'Filter by pizza size', type: String })
  @IsOptional()
  @IsString()
  size?: string;
}

export class PaginatedResponse<T> {
  @ApiProperty({ type: Number, description: 'Total number of items' })
  total: number;

  @ApiProperty({ type: Number, description: 'Current page number' })
  page: number;

  @ApiProperty({ type: Number, description: 'Items per page' })
  limit: number;

  @ApiProperty({ isArray: true, description: 'Paginated data items' })
  data: T[];

  constructor(data: T[], total: number, page: number, limit: number) {
    this.data = data;
    this.total = total;
    this.page = page;
    this.limit = limit;
  }
}

export class PizzaPaginatedResponseDto extends PaginatedResponse<Pizza> {
  @ApiProperty({ type: [Pizza], description: 'Paginated data items' })
  declare data: Pizza[];
}
