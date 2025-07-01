import { useContext } from 'react';
import { OrderContext } from '../context/order-context.types';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import type { DeliveryInfoValues } from '../types/delivery-info-values';

export default function OrderPizzaPage() {
	const { selectedPizza } = useContext(OrderContext);
	const navigate = useNavigate();

	const { register } = useForm<DeliveryInfoValues>({
		defaultValues: {
			name: '',
			address: '',
			phone: '',
		},
	});

	return (
		<div className='min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 p-6'>
			<button
				type='button'
				onClick={() => navigate(-1)}
				className='mb-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded shadow'>
				← Back
			</button>
			<h2 className='text-3xl font-bold text-orange-600 mb-6'>
				Delivery Information
			</h2>
			<form className='max-w-md mx-auto bg-white p-6 rounded shadow'>
				<div className='mb-4'>
					<label
						htmlFor='name'
						className='block mb-1 font-medium text-gray-700'>
						Name
					</label>
					<input
						id='name'
						type='text'
						placeholder='John Doe'
						className='w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 text-[#23272f]'
					/>
					<p className='text-red-500 text-xs mt-1'>Test error message</p>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='address'
						className='block mb-1 font-medium text-gray-700'>
						Address
					</label>
					<input
						id='address'
						type='text'
						placeholder='Partizanska bb'
						className='w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 text-[#23272f]'
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='phone'
						className='block mb-1 font-medium text-gray-700'>
						Phone Number
					</label>
					<input
						id='phone'
						type='phone'
						placeholder='+38970223305'
						className='w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 text-[#23272f]'
					/>
				</div>
				<button
					type='submit'
					className='w-full px-4 py-2 rounded font-semibold shadow transition text-white cursor-pointer bg-orange-600 hover:bg-orange-700'>
					Complete Order
				</button>
			</form>
		</div>
	);
}
