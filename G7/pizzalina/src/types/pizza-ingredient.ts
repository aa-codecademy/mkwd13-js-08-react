import type { PizzaIngredientType } from './pizza-ingredient-type.enum';

export interface PizzaIngredient {
	type: PizzaIngredientType;
	amount: number;
}
