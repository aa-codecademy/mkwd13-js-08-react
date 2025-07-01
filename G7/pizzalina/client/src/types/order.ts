import type { Pizza } from './pizza';

export interface Order {
	id: number;
	customer: {
		name: string;
		address: string;
		phone: string;
	};
	pizzas: Pizza[];
	total: number;
	status: string;
	createdAt: string;
}
