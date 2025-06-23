import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNumber,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CustomerDto } from './customer.dto';

export class CreateOrderDto {
  @ApiProperty({ type: CustomerDto, description: 'Customer information' })
  @ValidateNested()
  @Type(() => CustomerDto)
  customer: CustomerDto;

  @ApiProperty({ example: [1, 2], description: 'Array of pizza IDs' })
  @IsArray()
  @ArrayMinSize(1)
  @IsNumber({}, { each: true })
  pizzaIds: number[];
}
