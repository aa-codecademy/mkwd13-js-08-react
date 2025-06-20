import { useNavigate } from 'react-router-dom';
import IngredientSelector from '../components/IngredientSelector';
import { useState } from 'react';
import type { PizzaIngredient } from '../types/pizza-ingredient';
import type { PizzaIngredientType } from '../types/pizza-ingredient-type.enum';
import SelectedIngredientsList from '../components/SelectedIngredientsList';

export default function CustomPizzaPage() {
	const navigate = useNavigate();

	const [selectedIngredients, setSelectedIngredients] = useState<
		PizzaIngredient[]
	>([]);

	const handleAddIngredient = (type: PizzaIngredientType) => {
		setSelectedIngredients(prevSelectedIngredients => [
			...prevSelectedIngredients,
			{ type, amount: 1 },
		]);
	};

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
				<div>
					<IngredientSelector handleAddIngredient={handleAddIngredient} />
				</div>
				{/* Right: Selected Ingredients */}
				<div>
					<SelectedIngredientsList selectedIngredients={selectedIngredients} />
				</div>
			</div>
		</div>
	);
}

// Routes
// ['/', '/custom', '/orders']
