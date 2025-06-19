import { Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger';
import { PizzasService } from './pizzas.service';

@Controller('admin/pizzas')
export class AdminController {
  constructor(private readonly pizzasService: PizzasService) {}

  @Post('backfill')
  @ApiOperation({ summary: 'Backfill pizzas' })
  @ApiResponse({ status: 200, description: 'Pizzas backfilled' })
  backfill() {
    return this.pizzasService.backfill();
  }
}
