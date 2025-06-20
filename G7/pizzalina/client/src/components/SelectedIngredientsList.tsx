import type { PizzaIngredient } from '../types/pizza-ingredient';
import type { PizzaIngredientType } from '../types/pizza-ingredient-type.enum';
import SelectedIngredientItem from './SelectedIngredientItem';

type SelectedIngredientsListProps = {
	selectedIngredients: PizzaIngredient[];
	handleRemoveIngredient: (type: PizzaIngredientType) => void;
	handleIngredientAmountChange: (
		type: PizzaIngredientType,
		amount: number
	) => void;
};

export default function SelectedIngredientsList({
	selectedIngredients,
	handleRemoveIngredient,
	handleIngredientAmountChange,
}: SelectedIngredientsListProps) {
	if (!selectedIngredients.length) {
		return <p className='p-2'>No selected ingredients</p>;
	}

	return (
		<ul className='flex flex-wrap gap-2'>
			{selectedIngredients.map(ingredient => (
				<SelectedIngredientItem
					key={ingredient.type}
					ingredient={ingredient}
					handleRemoveIngredient={handleRemoveIngredient}
					handleIngredientAmountChange={handleIngredientAmountChange}
				/>
			))}
		</ul>
	);
}
