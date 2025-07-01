import { createContext, type Dispatch, type SetStateAction } from 'react';
import type { PizzaOrder } from '../types/pizza-order';
import type { PizzaIngredient } from '../types/pizza-ingredient';

export interface OrderContextType {
	selectedPizza: PizzaOrder | null;
	setSelectedPizza: (pizzaInfo: PizzaOrder) => void;
	selectedIngredients: PizzaIngredient[];
	setSelectedIngredients: Dispatch<SetStateAction<PizzaIngredient[]>>;
}

const defaultValue: OrderContextType = {
	selectedPizza: null,
	setSelectedPizza: () => void 0,
	selectedIngredients: [],
	setSelectedIngredients: () => void 0,
};

export const OrderContext = createContext(defaultValue);
