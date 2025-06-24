import { useNavigate } from 'react-router-dom';
import PizzaCard from '../components/PizzaCard';
import { useEffect, useState } from 'react';
import type { Pizza } from '../types/pizza';
import axios from 'axios';
import { API_BASE_URL } from '../const/api';
import type { PaginatedPizzas } from '../types/paginated-pizzas';

const btnClasses =
	'px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-white font-semibold shadow transition cursor-pointer';

export default function HomePage() {
	const [pizzas, setPizzas] = useState<Pizza[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(true);
		axios
			.get<PaginatedPizzas>(`${API_BASE_URL}/pizzas`)
			.then(res => setPizzas(res.data.data))
			.finally(() => setIsLoading(false));
	}, []);

	const shouldShownPizzas = !isLoading && !!pizzas.length;
	const shouldShowNoPizzas = !isLoading && !pizzas.length;

	return (
		<div className='min-h-screen bg-gradient-to-br from-yellow-100 to-orange-50 p-6'>
			<header className='flex justify-between item-center mb-8'>
				<h1 className='text-2xl font-bold text-orange-600'>🍕 Pizzalina</h1>
				<nav className='flex gap-4'>
					<button className={btnClasses} onClick={() => navigate('/custom')}>
						Create Custom Pizza
					</button>
					<button className={btnClasses}>View Orders</button>
				</nav>
			</header>

			{isLoading && (
				<div className='text-center text-lg'>Loading pizzas...</div>
			)}
			{shouldShowNoPizzas && (
				<p className='text-center text-lg'>No pizzas available.</p>
			)}
			{shouldShownPizzas && (
				<article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
					{pizzas.map(pizza => (
						<PizzaCard pizza={pizza} />
					))}
				</article>
			)}
		</div>
	);
}

// Used for debugging of objects and arrays
/* <pre>{JSON.stringify(pizza.ingredients)}</pre> */
