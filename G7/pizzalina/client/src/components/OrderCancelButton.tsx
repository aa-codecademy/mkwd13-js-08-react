import axios from 'axios';
import { API_BASE_URL } from '../const/api';
import { useContext } from 'react';
import { OrderContext } from '../context/order-context.types';

type OrderCancelButton = { status: string; id: number };

export default function OrderCancelButton({ status, id }: OrderCancelButton) {
	const { fetchOrders } = useContext(OrderContext);

	const handleCancelOrder = async () => {
		try {
			await axios.put(`${API_BASE_URL}/orders/${id}/status/cancelled`);
			console.log('Order has been successfully canceled');
			fetchOrders();
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			console.log(err);
		}
	};

	return (
		<button
			disabled={status === 'delivered' || status === 'cancelled'}
			type='button'
			onClick={handleCancelOrder}
			className='ml-4 px-4 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-xs font-bold shadow disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed'>
			Cancel
		</button>
	);
}
