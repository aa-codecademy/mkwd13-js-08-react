import { PizzaSize } from '../../shared/types/pizza-size';
import { PizzaIngredientType } from '../../shared/types/pizza-ingredient.enum';
import { CreatePizzaDto } from '../dto/create-pizza.dto';

export interface PizzaIngredientAmount {
  type: PizzaIngredientType;
  amount: number; // number of units or grams
}

const BASE_PRICES: Record<PizzaSize, number> = {
  [PizzaSize.SMALL]: 6,
  [PizzaSize.MEDIUM]: 8,
  [PizzaSize.LARGE]: 10,
};

const INGREDIENT_UNIT_PRICE: Record<PizzaIngredientType, number> = {
  [PizzaIngredientType.CHEESE]: 0.5,
  [PizzaIngredientType.TOMATO]: 0.3,
  [PizzaIngredientType.PEPPERONI]: 0.7,
  [PizzaIngredientType.MUSHROOM]: 0.4,
  [PizzaIngredientType.OLIVES]: 0.4,
  [PizzaIngredientType.ONION]: 0.2,
  [PizzaIngredientType.BACON]: 0.7,
  [PizzaIngredientType.HAM]: 0.6,
  [PizzaIngredientType.PINEAPPLE]: 0.5,
  [PizzaIngredientType.PEPPERS]: 0.3,
  [PizzaIngredientType.CHICKEN]: 0.8,
  [PizzaIngredientType.SPINACH]: 0.3,
  [PizzaIngredientType.GARLIC]: 0.2,
  [PizzaIngredientType.SAUSAGE]: 0.7,
  [PizzaIngredientType.BEEF]: 0.8,
  [PizzaIngredientType.ANCHOVY]: 0.9,
  [PizzaIngredientType.TUNA]: 0.7,
  [PizzaIngredientType.CORN]: 0.3,
  [PizzaIngredientType.BROCCOLI]: 0.4,
  [PizzaIngredientType.ARTICHOKE]: 0.5,
  [PizzaIngredientType.EGG]: 0.4,
  [PizzaIngredientType.PARMESAN]: 0.5,
  [PizzaIngredientType.MOZZARELLA]: 0.5,
  [PizzaIngredientType.RICOTTA]: 0.5,
  [PizzaIngredientType.BLUE_CHEESE]: 0.6,
  [PizzaIngredientType.ROCKET]: 0.3,
  [PizzaIngredientType.ZUCCHINI]: 0.3,
  [PizzaIngredientType.EGGPLANT]: 0.3,
  [PizzaIngredientType.PROSCIUTTO]: 0.8,
  [PizzaIngredientType.SALAMI]: 0.7,
  [PizzaIngredientType.BBQ_SAUCE]: 0.2,
  [PizzaIngredientType.BUFFALO_SAUCE]: 0.2,
  [PizzaIngredientType.BASIL]: 0.1,
  [PizzaIngredientType.OREGANO]: 0.1,
};

export function calculatePizzaPrice({
  size,
  ingredients,
}: CreatePizzaDto): number {
  let price = BASE_PRICES[size] || BASE_PRICES[PizzaSize.MEDIUM];

  for (const ingredient of ingredients) {
    const unitPrice =
      INGREDIENT_UNIT_PRICE[ingredient.type as PizzaIngredientType] || 0.3;
    price += unitPrice * ingredient.amount;
  }

  return Math.round(price * 100) / 100;
}
