import { createContext } from 'react';
import type { PizzaOrder } from '../types/pizza-order';

export interface OrderContextType {
	selectedPizza: PizzaOrder | null;
	setSelectedPizza: (pizzaInfo: PizzaOrder) => void;
}

const defaultValue: OrderContextType = {
	selectedPizza: null,
	setSelectedPizza: () => void 0,
};

export const OrderContext = createContext(defaultValue);
