import { createContext, type Dispatch, type SetStateAction } from 'react';
import type { PizzaOrder } from '../types/pizza-order';
import type { PizzaIngredient } from '../types/pizza-ingredient';
import type { Order } from '../types/order';

export interface OrderContextType {
	selectedPizza: PizzaOrder | null;
	setSelectedPizza: (pizzaInfo: PizzaOrder | null) => void;
	selectedIngredients: PizzaIngredient[];
	setSelectedIngredients: Dispatch<SetStateAction<PizzaIngredient[]>>;
	orders: Order[];
	fetchOrders: () => void;
}

const defaultValue: OrderContextType = {
	selectedPizza: null,
	setSelectedPizza: () => void 0,
	selectedIngredients: [],
	setSelectedIngredients: () => void 0,
	orders: [],
	fetchOrders: () => void 0,
};

export const OrderContext = createContext(defaultValue);
