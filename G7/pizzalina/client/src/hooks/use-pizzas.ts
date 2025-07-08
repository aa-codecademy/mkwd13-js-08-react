import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../const/api';
import type { PaginatedPizzas } from '../types/paginated-pizzas';
import type { Pizza } from '../types/pizza';
import axios from 'axios';

const DEFAULT_PAGE_SIZE = 9;
const DEFAULT_SORT_DIRECTION = 'ASC';
const DEFAULT_SORT_BY = 'createdAt';

export function usePizzas() {
	const [pizzas, setPizzas] = useState<Pizza[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	// Pagination
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
	const [total, setTotal] = useState(0);
	const totalPages = Math.ceil(total / pageSize) || 1;

	// Searching
	const [searchTerm, setSearchTerm] = useState('');
	const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

	// Sorting
	const [sortDirection, setSortDirection] = useState(DEFAULT_SORT_DIRECTION);
	const [sortBy, setSortBy] = useState(DEFAULT_SORT_BY);

	// Debouncing
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedSearchTerm(searchTerm);
			setPage(1);
		}, 600);

		return () => clearTimeout(timer);
	}, [searchTerm]);

	// Fetch new pizzas
	useEffect(() => {
		setIsLoading(true);
		axios
			.get<PaginatedPizzas>(`${API_BASE_URL}/pizzas`, {
				params: {
					page,
					limit: pageSize,
					searchTerm: debouncedSearchTerm,
					orderBy: sortBy,
					order: sortDirection,
				},
			})
			.then(res => {
				setPizzas(res.data.data);
				setTotal(res.data.total);
			})
			.finally(() => setIsLoading(false));
	}, [page, debouncedSearchTerm, pageSize, sortBy, sortDirection]);

	const shouldShownPizzas = !isLoading && !!pizzas.length;
	const shouldShowNoPizzas = !isLoading && !pizzas.length;

	const handleSorting = (newSortBy: string) => {
		if (newSortBy === sortBy) {
			// change the direction
			setSortDirection(prevSortDirection =>
				prevSortDirection === 'ASC' ? 'DESC' : 'ASC'
			);
		} else {
			// sort by something else
			setSortBy(newSortBy);
			setSortDirection(DEFAULT_SORT_DIRECTION);
		}
	};

	return {
		pizzas,
		page,
		setPage,
		totalPages,
		isLoading,
		shouldShownPizzas,
		shouldShowNoPizzas,
		searchTerm,
		setSearchTerm,
		pageSize,
		setPageSize,
		sortBy,
		sortDirection,
		handleSorting,
	};
}
