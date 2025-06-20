import type { ChangeEvent } from 'react';
import type { PizzaIngredient } from '../types/pizza-ingredient';
import type { PizzaIngredientType } from '../types/pizza-ingredient-type.enum';

type SelectedIngredientItemProps = {
	ingredient: PizzaIngredient;
	handleRemoveIngredient: (type: PizzaIngredientType) => void;
	handleIngredientAmountChange: (
		type: PizzaIngredientType,
		amount: number
	) => void;
};

export default function SelectedIngredientItem({
	ingredient,
	handleRemoveIngredient,
	handleIngredientAmountChange,
}: SelectedIngredientItemProps) {
	return (
		<li className='flex items-center gap-1 bg-orange-50 px-2 py-1 rounded text-gray-500'>
			<span className='capitalize'>{ingredient.type.replace(/_/g, ' ')}</span>
			<input
				type='number'
				min={1}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					handleIngredientAmountChange(
						ingredient.type,
						parseInt(e.target.value)
					)
				}
				value={ingredient.amount}
				className='w-14 text-center border border-gray-300 rounded text-xs px-1 py-0.5 ml-2 text-gray-800'
			/>
			<button
				type='button'
				onClick={() => handleRemoveIngredient(ingredient.type)}
				className='ml-2 px-2 py-0.5 rounded text-xs bg-red-200 text-red-700 hover:bg-red-300 cursor-pointer'>
				Remove
			</button>
		</li>
	);
}
