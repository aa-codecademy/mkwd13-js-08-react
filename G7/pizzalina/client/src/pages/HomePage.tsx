import { useNavigate } from 'react-router-dom';
import PizzaCard from '../components/PizzaCard';
import { usePizzas } from '../hooks/use-pizzas';

const btnClasses =
	'px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-white font-semibold shadow transition cursor-pointer';

const paginationBtnClasses = `px-3 py-1 rounded bg-orange-100 hover:bg-orange-200 text-orange-700 font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`;

export default function HomePage() {
	const {
		pizzas,
		isLoading,
		page,
		setPage,
		totalPages,
		shouldShownPizzas,
		shouldShowNoPizzas,
	} = usePizzas();
	const navigate = useNavigate();

	return (
		<div className='min-h-screen bg-gradient-to-br from-yellow-100 to-orange-50 p-6'>
			<header className='flex justify-between item-center mb-8'>
				<h1 className='text-2xl font-bold text-orange-600'>🍕 Pizzalina</h1>
				<nav className='flex gap-4'>
					<button className={btnClasses} onClick={() => navigate('/custom')}>
						Create Custom Pizza
					</button>
					<button onClick={() => navigate('/orders')} className={btnClasses}>
						View Orders
					</button>
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
						<PizzaCard key={pizza.id} pizza={pizza} />
					))}
				</article>
			)}
			{/* Pagination */}
			<div className='flex justify-center items-center gap-4 mt-8'>
				<button
					className={paginationBtnClasses}
					disabled={page === 1}
					onClick={() => setPage(prevPage => prevPage - 1)}>
					Prev
				</button>
				<span className='text-orange-600 font-semibold'>
					Page {page} from {totalPages}
				</span>
				<button
					className={paginationBtnClasses}
					disabled={page === totalPages}
					onClick={() => setPage(prevPage => prevPage + 1)}>
					Next
				</button>
			</div>
		</div>
	);
}

// Used for debugging of objects and arrays
/* <pre>{JSON.stringify(pizza.ingredients)}</pre> */
