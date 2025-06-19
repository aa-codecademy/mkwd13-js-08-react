import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  ValidateNested,
  Min,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PizzaSize } from '../../shared/types/pizza-size';
import { PizzaIngredientDto } from './pizza-ingredient.dto';

export class UpdatePizzaDto {
  @ApiProperty({
    example: 'Margherita',
    description: 'Name of the pizza',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    example: 'Classic pizza with tomato and cheese',
    description: 'Description of the pizza',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'https://example.com/image.jpg',
    description: 'Image URL of the pizza',
    required: false,
  })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty({
    type: [PizzaIngredientDto],
    description: 'List of ingredients',
    required: false,
  })
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => PizzaIngredientDto)
  ingredients?: PizzaIngredientDto[];

  @ApiProperty({
    example: true,
    description: 'Availability of the pizza',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @ApiProperty({
    enum: PizzaSize,
    example: PizzaSize.MEDIUM,
    description: 'Size of the pizza',
    required: false,
  })
  @IsOptional()
  @IsEnum(PizzaSize)
  size?: PizzaSize;

  @ApiProperty({
    example: 800,
    description: 'Calories in the pizza',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  calories?: number;
}
