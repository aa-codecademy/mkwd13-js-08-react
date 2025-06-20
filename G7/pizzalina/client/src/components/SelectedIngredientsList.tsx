import type { PizzaIngredient } from '../types/pizza-ingredient';

type SelectedIngredientsListProps = {
	selectedIngredients: PizzaIngredient[];
};

export default function SelectedIngredientsList({
	selectedIngredients,
}: SelectedIngredientsListProps) {
	return (
		<div>
			<pre>{JSON.stringify(selectedIngredients)}</pre>
		</div>
	);
}
