import { useState, type ReactNode } from 'react';
import { OrderContext } from './order-context.types';
import type { PizzaOrder } from '../types/pizza-order';

export function OrderProvider({ children }: { children: ReactNode }) {
	const [selectedPizza, setSelectedPizza] = useState<PizzaOrder | null>(null);

	return (
		<OrderContext.Provider
			value={{
				selectedPizza,
				setSelectedPizza,
			}}>
			{children}
		</OrderContext.Provider>
	);
}
