import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductFilters } from './interfaces/products-filters.interface';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts(
    @Query('title') title: string,
    @Query('inStock') inStock: string,
    @Query('orderBy') orderBy: 'price' | 'stock',
  ) {
    const filters: ProductFilters = {
      title,
      inStock: inStock === 'true',
      orderBy,
    };

    return this.productsService.getAllProducts(filters);
  }

  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getProductById(id);
  }

  @Get(':id/orders')
  getProductOrders(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getProductOrders(id);
  }

  @Post()
  createProduct(@Body() productData: CreateProductDto) {
    return this.productsService.createProduct(productData);
  }

  @Post('/many')
  createManyProducts(@Body() data: any) {
    return this.productsService.createMultipleProducts(data);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') productId: string,
    @Body() updateData: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(Number(productId), updateData);
  }

  @Delete(':id')
  deleteProduct(@Param('id') productId: string) {
    return this.productsService.deleteProduct(Number(productId));
  }
}
