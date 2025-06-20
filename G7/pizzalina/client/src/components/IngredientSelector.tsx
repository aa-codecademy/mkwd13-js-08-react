import { PizzaIngredientType } from '../types/pizza-ingredient-type.enum';
import IngredientCard from './IngredientCard';

const ALL_INGREDIENTS = Object.values(PizzaIngredientType);

type IngredientSelectorProps = {
	handleAddIngredient: (type: PizzaIngredientType) => void;
};

export default function IngredientSelector({
	handleAddIngredient,
}: IngredientSelectorProps) {
	return (
		<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
			{ALL_INGREDIENTS.map(type => {
				return (
					<IngredientCard
						type={type}
						isSelected={false}
						handleAddIngredient={handleAddIngredient}
					/>
				);
			})}
		</div>
	);
}
