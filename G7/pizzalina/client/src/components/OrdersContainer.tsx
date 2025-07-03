import type { Order } from '../types/order';
import OrderItem from './OrderItem';

type OrdersContainer = {
	orders: Order[];
	isActive: boolean;
};

export default function OrdersContainer({ orders, isActive }: OrdersContainer) {
	return (
		<div className='mb-10'>
			<h3 className='text-xl font-semibold mb-4 text-blue-700'>
				{isActive ? 'Active' : 'Inactive'} Orders
			</h3>
			{orders.map(order => (
				<OrderItem key={order.id} order={order} />
			))}
		</div>
	);
}
