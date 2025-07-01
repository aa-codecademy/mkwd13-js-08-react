import { useContext, useState } from 'react';
import { OrderContext } from '../context/order-context.types';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import type { DeliveryInfoValues } from '../types/delivery-info-values';
import axios from 'axios';
import { API_BASE_URL } from '../const/api';
import { PizzaSize } from '../types/pizza-size.enum';

export default function OrderPizzaPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);
	const { selectedPizza, selectedIngredients } = useContext(OrderContext);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DeliveryInfoValues>({
		defaultValues: {
			name: '',
			address: '',
			phone: '',
		},
	});

	const onSubmit = async (data: DeliveryInfoValues) => {
		setError('');
		setIsLoading(true);

		let pizzaId = selectedPizza?.pizzaId;

		// The user is ordering a custom pizza
		if (selectedIngredients.length) {
			try {
				const createdPizzaResponse = await axios.post(
					`${API_BASE_URL}/pizzas`,
					{
						name: 'Custom Pizza',
						description: `Custom pizza made by ${data.name}`,
						imageUrl: '/pizza1.jpg',
						size: PizzaSize.MEDIUM,
						isAvailable: false,
						ingredients: selectedIngredients,
					}
				);
				pizzaId = createdPizzaResponse.data.id;
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (err: any) {
				setError(err);
				setIsLoading(false);
				return;
			}
		}

		try {
			await axios.post(`${API_BASE_URL}/orders`, {
				customer: data,
				pizzaIds: [pizzaId],
			});
			setSuccess(true);
			setTimeout(() => navigate('/orders'), 3000);

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};

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
			<pre>{JSON.stringify(selectedIngredients)}</pre>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='max-w-md mx-auto bg-white p-6 rounded shadow'>
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
						{...register('name', { required: 'Name is required' })}
						className='w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 text-[#23272f]'
					/>
					{errors.name && (
						<p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>
					)}
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
						{...register('address', { required: 'Address is required' })}
						className='w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 text-[#23272f]'
					/>
					{errors.address && (
						<p className='text-red-500 text-xs mt-1'>
							{errors.address.message}
						</p>
					)}
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
						{...register('phone', { required: 'Phone number is required' })}
						className='w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 text-[#23272f]'
					/>
					{errors.phone && (
						<p className='text-red-500 text-xs mt-1'>{errors.phone.message}</p>
					)}
				</div>
				{error && (
					<p className='mb-4 text-red-600 text-center text-sm'>{error}</p>
				)}
				{success && (
					<p className='mb-4 text-green-600 text-sm'>
						Order has been submitted successfully. It is arriving soon, get
						ready for it. Redirecting...
					</p>
				)}
				<button
					type='submit'
					disabled={isLoading}
					className={`w-full px-4 py-2 rounded font-semibold shadow transition text-white ${
						!isLoading
							? 'bg-orange-600 hover:bg-orange-700 cursor-pointer'
							: 'bg-gray-300 cursor-not-allowed'
					}`}>
					{!isLoading ? 'Complete Order' : 'Processing...'}
				</button>
			</form>
		</div>
	);
}
