import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { Pizza } from './entities/pizza.entity';
import {
  PizzaQueryDto,
  PizzaPaginatedResponseDto,
  PaginatedResponse,
} from './dto/pizza-query.dto';

@ApiTags('pizzas')
@Controller('pizzas')
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new pizza' })
  @ApiBody({ type: CreatePizzaDto })
  @ApiCreatedResponse({
    description: 'The pizza has been successfully created.',
    type: Pizza,
  })
  create(@Body() createPizzaDto: CreatePizzaDto) {
    return this.pizzasService.create(createPizzaDto);
  }

  @Get()
  @ApiOperation({
    summary:
      'Search pizzas with pagination, ordering, filtering, and searching',
  })
  @ApiOkResponse({
    description: 'Paginated list of pizzas',
    type: PizzaPaginatedResponseDto,
  })
  search(@Query() query: PizzaQueryDto): Promise<PaginatedResponse<Pizza>> {
    return this.pizzasService.search(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a pizza by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ description: 'The pizza', type: Pizza })
  @ApiNotFoundResponse({ description: 'Pizza not found' })
  findOne(@Param('id') id: string) {
    return this.pizzasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a pizza by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdatePizzaDto })
  @ApiOkResponse({ description: 'The updated pizza', type: Pizza })
  @ApiNotFoundResponse({ description: 'Pizza not found' })
  update(@Param('id') id: string, @Body() updatePizzaDto: UpdatePizzaDto) {
    return this.pizzasService.update(+id, updatePizzaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a pizza by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiNoContentResponse({ description: 'Pizza deleted' })
  remove(@Param('id') id: string) {
    return this.pizzasService.remove(+id);
  }
}
