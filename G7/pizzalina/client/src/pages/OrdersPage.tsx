import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OrdersContainer from '../components/OrdersContainer';
import { OrderContext } from '../context/order-context.types';

const ACTIVE_STATUSES = ['pending', 'confirmed'];

export default function OrdersPage() {
	const { orders, fetchOrders } = useContext(OrderContext);
	const navigate = useNavigate();

	useEffect(() => {
		fetchOrders();
	}, [fetchOrders]);

	// pending & confirmed
	const activeOrders = orders.filter(order =>
		ACTIVE_STATUSES.includes(order.status)
	);

	// delivered & canceled
	const inactiveOrders = orders.filter(
		order => !ACTIVE_STATUSES.includes(order.status)
	);

	return (
		<div className='min-h-screen bg-gradient-to-br from-yellow-100 to-orange-50 p-6'>
			<button
				className='mb-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded shadow cursor-pointer'
				onClick={() => navigate(-1)}>
				← Back
			</button>
			<h2 className='text-3xl font-bold text-orange-600 mb-6'>Your Orders</h2>
			{/* isActive={true} same is just using isActive */}
			<OrdersContainer orders={activeOrders} isActive />
			<OrdersContainer orders={inactiveOrders} isActive={false} />
		</div>
	);
}
