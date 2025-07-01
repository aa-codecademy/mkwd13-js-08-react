import { useState, type ReactNode } from 'react';
import { OrderContext } from './order-context.types';
import type { PizzaOrder } from '../types/pizza-order';
import type { PizzaIngredient } from '../types/pizza-ingredient';

export function OrderProvider({ children }: { children: ReactNode }) {
	const [selectedPizza, setSelectedPizza] = useState<PizzaOrder | null>(null);
	const [selectedIngredients, setSelectedIngredients] = useState<
		PizzaIngredient[]
	>([]);

	return (
		<OrderContext.Provider
			value={{
				selectedPizza,
				setSelectedPizza,
				selectedIngredients,
				setSelectedIngredients,
			}}>
			{children}
		</OrderContext.Provider>
	);
}
