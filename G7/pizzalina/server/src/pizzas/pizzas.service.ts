import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { Pizza } from './entities/pizza.entity';
import { PizzaQueryDto, PaginatedResponse } from './dto/pizza-query.dto';
import { OrderDirection } from '../shared/types/order-direction.dto';
import { PizzaOrderByField } from '../shared/types/pizza-order-by-field.enum';
import { calculatePizzaPrice } from './utils/calculate-pizza-price';
import { popularPizzas } from '../shared/consts/popular-pizzas';
import { faker } from '@faker-js/faker';

@Injectable()
export class PizzasService {
  constructor(
    @InjectRepository(Pizza)
    private readonly pizzaRepository: Repository<Pizza>,
  ) {}

  async create(createPizzaDto: CreatePizzaDto): Promise<Pizza> {
    const price = calculatePizzaPrice(createPizzaDto);
    const pizza = this.pizzaRepository.create({ ...createPizzaDto, price });
    pizza.imageUrl = `/pizza${faker.number.int({ min: 1, max: 21 })}.jpg`; // choosing a random image
    pizza.name = createPizzaDto.name + faker.number.int({ min: 23, max: 2000 }); // choosing a random name
    return this.pizzaRepository.save(pizza);
  }

  async search({
    page = 1,
    limit = 10,
    orderBy = PizzaOrderByField.ID,
    order = OrderDirection.ASC,
    searchTerm = '',
    isAvailable,
    size,
  }: PizzaQueryDto): Promise<PaginatedResponse<Pizza>> {
    const where: Record<string, any> = {};

    if (typeof isAvailable === 'boolean') {
      where.isAvailable = isAvailable;
    }

    if (size) {
      where.size = size;
    }

    if (searchTerm) {
      where.name = ILike(`%${searchTerm}%`);
    }

    const [data, total] = await this.pizzaRepository.findAndCount({
      where,
      order: { [orderBy]: order },
      skip: (page - 1) * limit,
      take: limit,
    });
    return new PaginatedResponse<Pizza>(data, total, page, limit);
  }

  async findOne(id: number): Promise<Pizza | null> {
    const pizza = await this.pizzaRepository.findOneBy({ id });
    if (!pizza) {
      throw new NotFoundException(`Pizza with id ${id} not found`);
    }
    return pizza;
  }

  async update(
    id: number,
    updatePizzaDto: UpdatePizzaDto,
  ): Promise<Pizza | null> {
    const pizza = await this.pizzaRepository.findOneBy({ id });

    if (!pizza) {
      throw new NotFoundException(`Pizza with id ${id} not found`);
    }

    const price = calculatePizzaPrice({ ...pizza, ...updatePizzaDto });
    await this.pizzaRepository.update(id, { ...updatePizzaDto, price });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.pizzaRepository.softDelete(id);
  }

  // ADMIN ONLY
  async backfill() {
    const result = await this.pizzaRepository.save(popularPizzas);
    console.log('🚀 ivo-test ~ PizzasService ~ backfill ~ result:', result);

    if (!result.length)
      throw new NotFoundException('No popular pizzas created');

    return { message: `${result.length} popular pizzas created` };
  }
}
