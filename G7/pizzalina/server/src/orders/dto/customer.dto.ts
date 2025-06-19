import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CustomerDto {
  @ApiProperty({ example: 'John Doe', description: 'Customer name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '123 Main St', description: 'Customer address' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: '+1234567890', description: 'Customer phone' })
  @IsString()
  @IsNotEmpty()
  phone: string;
}
