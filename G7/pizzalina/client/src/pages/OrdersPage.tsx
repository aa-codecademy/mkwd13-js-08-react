import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../const/api';
import type { Order } from '../types/order';

export default function OrdersPage() {
	const [orders, setOrders] = useState<Order[]>([]);

	useEffect(() => {
		axios
			.get<Order[]>(`${API_BASE_URL}/orders`)
			.then(res => setOrders(res.data));
	}, []);

	return (
		<div>
			<h2 className='text-3xl font-bold text-orange-600 mb-6'>Your Orders</h2>
			{orders.map(order => (
				<div
					key={order.id}
					className='bg-white rounded-lg shadow p-4 text-gray-800'>
					<span className='flex justify-between items-center mb-2'>
						Order #{order.id}
					</span>
					<span className='text-xs text-gray-500'>
						{new Date(order.createdAt).toLocaleString()}
					</span>
				</div>
			))}
		</div>
	);
}
