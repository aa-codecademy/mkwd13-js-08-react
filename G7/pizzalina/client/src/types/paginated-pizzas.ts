import type { Pizza } from './pizza';

export interface PaginatedPizzas {
	data: Pizza[];
	total: number;
	page: number;
	pageSize: number;
}
