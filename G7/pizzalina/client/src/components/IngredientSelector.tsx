import type { PizzaIngredient } from '../types/pizza-ingredient';
import { PizzaIngredientType } from '../types/pizza-ingredient-type.enum';
import IngredientCard from './IngredientCard';

type IngredientSelectorProps = {
	selectedIngredients: PizzaIngredient[];
	handleAddIngredient: (type: PizzaIngredientType) => void;
	ingredients: PizzaIngredientType[];
};

export default function IngredientSelector({
	handleAddIngredient,
	selectedIngredients,
	ingredients,
}: IngredientSelectorProps) {
	return (
		<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
			{ingredients.map(type => {
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
