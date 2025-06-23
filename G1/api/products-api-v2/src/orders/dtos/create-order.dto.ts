import { IsArray, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  date: string;

  @IsString()
  fullName: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  address: string;

  @IsArray()
  products: {
    productId: number;
    quantity: number;
  }[];
}
