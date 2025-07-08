import { useNavigate } from 'react-router-dom';
import PizzaCard from '../components/PizzaCard';
import { usePizzas } from '../hooks/use-pizzas';

const PAGE_SIZE_OPTIONS = [3, 6, 9, 12, 18];
const SORT_BY_OPTIONS = [
	{ value: 'createdAt', label: 'Newest' },
	{ value: 'calories', label: 'Calories' },
	{ value: 'price', label: 'Price' },
	{ value: 'name', label: 'Name' },
];

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
		searchTerm,
		setSearchTerm,
		pageSize,
		setPageSize,
		sortBy,
		sortDirection,
		handleSorting,
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

			<section className='bg-white rounded-lg shadow-md p-6 mb-6'>
				<div>
					<label
						htmlFor='search'
						className='block text-sm font-medium text-gray-700 mb-2'>
						Search Pizzas
					</label>
					<input
						id='search'
						type='search'
						placeholder='Search by name or description...'
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
						className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
					/>
				</div>
				<div className='bg-white rounded-lg shadow-md p-4 mb-6 flex flex-wrap gap-2 items-center'>
					<span className='text-sm font-medium text-gray-700 mr-2'>
						Sort by:
					</span>
					{SORT_BY_OPTIONS.map(option => (
						<button
							className={`px-3 py-1 rounded-full text-sm font-medium transition cursor-pointer ${
								sortBy === option.value
									? 'bg-orange-600 text-white'
									: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
							}`}
							key={option.value}
							onClick={() => handleSorting(option.value)}>
							{option.label}
							{sortBy === option.value && (
								<span className='ml-1'>
									{sortDirection === 'ASC' ? '↑' : '↓'}
								</span>
							)}
						</button>
					))}
				</div>
			</section>

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
				<div>
					<select
						value={pageSize}
						onChange={e => setPageSize(parseInt(e.target.value))}
						className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'>
						{PAGE_SIZE_OPTIONS.map(option => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
}

// Used for debugging of objects and arrays
/* <pre>{JSON.stringify(pizza.ingredients)}</pre> */
