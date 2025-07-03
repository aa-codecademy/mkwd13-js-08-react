import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../const/api';
import type { PaginatedPizzas } from '../types/paginated-pizzas';
import type { Pizza } from '../types/pizza';
import axios from 'axios';

const DEFAULT_PAGE_SIZE = 9;

export function usePizzas() {
	const [pizzas, setPizzas] = useState<Pizza[]>([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);

	const totalPages = Math.ceil(total / DEFAULT_PAGE_SIZE);

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get<PaginatedPizzas>(`${API_BASE_URL}/pizzas`, {
				params: {
					page,
					limit: DEFAULT_PAGE_SIZE,
				},
			})
			.then(res => {
				setPizzas(res.data.data);
				setTotal(res.data.total);
			})
			.finally(() => setIsLoading(false));
	}, [page]);

	const shouldShownPizzas = !isLoading && !!pizzas.length;
	const shouldShowNoPizzas = !isLoading && !pizzas.length;

	return {
		pizzas,
		page,
		setPage,
		totalPages,
		isLoading,
		shouldShownPizzas,
		shouldShowNoPizzas,
	};
}
