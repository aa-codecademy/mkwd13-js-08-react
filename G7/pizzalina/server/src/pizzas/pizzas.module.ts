import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzasService } from './pizzas.service';
import { PizzasController } from './pizzas.controller';
import { Pizza } from './entities/pizza.entity';
import { AdminController } from './admin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pizza])],
  controllers: [PizzasController, AdminController],
  providers: [PizzasService],
})
export class PizzasModule {}
