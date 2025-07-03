import type { Order } from '../types/order';
import OrderCancelButton from './OrderCancelButton';

type OrderItemProps = {
	order: Order;
};

export default function OrderItem({ order }: OrderItemProps) {
	return (
		<div
			key={order.id}
			className='bg-white rounded-lg shadow p-4 mb-4 text-gray-800'>
			<div className='flex justify-between items-center mb-2'>
				<span className='flex justify-between items-center mb-2'>
					Order #{order.id}
				</span>
				<span className='text-xs text-gray-500'>
					{new Date(order.createdAt).toLocaleString()}
				</span>
			</div>
			<div className='mb-2'>
				<span className='font-semibold'>Customer: </span>
				{order.customer.name}
				<span className='text-gray-500'> ({order.customer.phone})</span>
				<div className='text-sm text-gray-600'>
					Address: {order.customer.address}
				</div>
			</div>
			<div className='mb-2'>
				<span className='font-semibold'>Pizzas:</span>
				<ul className='list-disc list-inside ml-4'>
					{order.pizzas.map(pizza => (
						<li key={pizza.id}>{pizza.name}</li>
					))}
				</ul>
			</div>
			<div className='flex justify-between items-center'>
				<span className='font-semibold'>Total: ${order.total.toFixed(2)}</span>
				<span
					className={`px-3 py-1 rounded text-xs font-bold ${
						order.status === 'pending'
							? 'bg-yellow-200 text-yellow-800'
							: order.status === 'confirmed'
							? 'bg-blue-200 text-blue-800'
							: order.status === 'delivered'
							? 'bg-green-200 text-green-800'
							: 'bg-red-200 text-red-800'
					}`}>
					{order.status}
				</span>
				<OrderCancelButton status={order.status} id={order.id} />
			</div>
		</div>
	);
}
