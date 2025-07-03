import { useCallback, useState, type ReactNode } from 'react';
import { OrderContext } from './order-context.types';
import type { PizzaOrder } from '../types/pizza-order';
import type { PizzaIngredient } from '../types/pizza-ingredient';
import type { Order } from '../types/order';
import axios from 'axios';
import { API_BASE_URL } from '../const/api';

export function OrderProvider({ children }: { children: ReactNode }) {
	const [selectedPizza, setSelectedPizza] = useState<PizzaOrder | null>(null);
	const [selectedIngredients, setSelectedIngredients] = useState<
		PizzaIngredient[]
	>([]);
	const [orders, setOrders] = useState<Order[]>([]);

	const fetchOrders = useCallback(
		() =>
			axios
				.get<Order[]>(`${API_BASE_URL}/orders`)
				.then(res => setOrders(res.data)),
		[]
	);

	return (
		<OrderContext.Provider
			value={{
				selectedPizza,
				setSelectedPizza,
				selectedIngredients,
				setSelectedIngredients,
				orders,
				fetchOrders,
			}}>
			{children}
		</OrderContext.Provider>
	);
}
