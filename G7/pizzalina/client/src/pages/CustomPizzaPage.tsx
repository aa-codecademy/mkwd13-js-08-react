import { useNavigate } from 'react-router-dom';
import IngredientSelector from '../components/IngredientSelector';
import { useContext, useState } from 'react';
import { PizzaIngredientType } from '../types/pizza-ingredient-type.enum';
import SelectedIngredientsList from '../components/SelectedIngredientsList';
import { OrderContext } from '../context/order-context.types';
import IngredientSearchBar from '../components/IngredientSearchBar';

const ALL_INGREDIENTS = Object.values(PizzaIngredientType);

export default function CustomPizzaPage() {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState('');

	const { selectedIngredients, setSelectedIngredients } =
		useContext(OrderContext);

	const handleAddIngredient = (type: PizzaIngredientType) => {
		setSelectedIngredients(prevSelectedIngredients => [
			...prevSelectedIngredients,
			{ type, amount: 1 },
		]);
	};

	const handleRemoveIngredient = (type: PizzaIngredientType) => {
		setSelectedIngredients(prevSelectedIngredients =>
			prevSelectedIngredients.filter(ing => ing.type !== type)
		);
	};

	const handleIngredientAmountChange = (
		type: PizzaIngredientType,
		amount: number
	) => {
		setSelectedIngredients(prevSelectedIngredients =>
			prevSelectedIngredients.map(ingredient => {
				if (ingredient.type === type) {
					ingredient.amount = amount;
					return ingredient;
				}
				return ingredient;
			})
		);
	};

	const filteredIngredients = ALL_INGREDIENTS.filter(type =>
		type.replace(/_/g, ' ').toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className='min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 p-6'>
			<button
				className='mb-6 px-4 py-2 bg-gray-100 hover:bg-gray:200 rounded shadow'
				onClick={() => navigate(-1)}>
				← Back
			</button>
			<h2 className='text-3xl font-bold text-orange-600 mb-6'>
				Create Your Own Pizza
			</h2>
			<div className='flex gap-8'>
				{/* Left: Ingredient selector */}
				<div className='w-full md:w-3/5'>
					<IngredientSearchBar
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
					/>
					<IngredientSelector
						selectedIngredients={selectedIngredients}
						handleAddIngredient={handleAddIngredient}
						ingredients={filteredIngredients}
					/>
				</div>
				{/* Right: Selected Ingredients */}
				<div className='w-full md:w-2/5'>
					<h3 className='text-xl font-semibold mb-2 text-gray-500'>
						Selected Ingredients:
					</h3>

					<SelectedIngredientsList
						selectedIngredients={selectedIngredients}
						handleRemoveIngredient={handleRemoveIngredient}
						handleIngredientAmountChange={handleIngredientAmountChange}
					/>
					<button
						disabled={selectedIngredients.length < 2}
						onClick={() => navigate('/order')}
						className={`mt-6 w-full px-4 py-2 rounded font-semibold shadow transition text-white ${
							selectedIngredients.length > 1
								? 'bg-orange-600 hover:bg-orange-700 cursor-pointer'
								: 'bg-gray-300 cursor-not-allowed'
						}`}
						type='button'>
						Make Order
					</button>
				</div>
			</div>
		</div>
	);
}

// Routes
// ['/', '/custom', '/orders']
