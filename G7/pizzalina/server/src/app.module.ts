import { Module } from '@nestjs/common';
import { PizzasModule } from './pizzas/pizzas.module';
import { DatabaseModule } from './database/database.module';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    PizzasModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
