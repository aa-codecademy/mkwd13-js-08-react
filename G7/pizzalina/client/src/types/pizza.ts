import type { PizzaIngredient } from './pizza-ingredient';
import type { PizzaSize } from './pizza-size.enum';

export interface Pizza {
	id: number;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
	isAvailable: boolean;
	size: PizzaSize;
	calories: number;
	ingredients: PizzaIngredient[];
}
