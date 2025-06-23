import { IsNumber, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PizzaIngredientDto {
  @ApiProperty({ example: 'cheese', description: 'Type of ingredient' })
  @IsString()
  type: string;

  @ApiProperty({ example: 100, description: 'Amount of ingredient in grams' })
  @IsNumber()
  @Min(1)
  amount: number;
}
