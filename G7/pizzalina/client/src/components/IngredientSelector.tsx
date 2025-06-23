import type { PizzaIngredient } from '../types/pizza-ingredient';
import { PizzaIngredientType } from '../types/pizza-ingredient-type.enum';
import IngredientCard from './IngredientCard';

const ALL_INGREDIENTS = Object.values(PizzaIngredientType);

type IngredientSelectorProps = {
	selectedIngredients: PizzaIngredient[];
	handleAddIngredient: (type: PizzaIngredientType) => void;
};

export default function IngredientSelector({
	handleAddIngredient,
	selectedIngredients,
}: IngredientSelectorProps) {
	return (
		<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
			{ALL_INGREDIENTS.map(type => {
				return (
					<IngredientCard
						key={type}
						type={type}
						isSelected={selectedIngredients.some(
							ingredient => ingredient.type === type
						)}
						handleAddIngredient={handleAddIngredient}
					/>
				);
			})}
		</div>
	);
}
