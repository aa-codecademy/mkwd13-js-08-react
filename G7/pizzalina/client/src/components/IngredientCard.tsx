import type { PizzaIngredientType } from '../types/pizza-ingredient-type.enum';

type IngredientCardProps = {
	type: PizzaIngredientType;
	isSelected: boolean;
	handleAddIngredient: (type: PizzaIngredientType) => void;
};

export default function IngredientCard({
	type,
	isSelected,
	handleAddIngredient,
}: IngredientCardProps) {
	return (
		<div className='flex flex-col items-center p-3 rounded-lg border shadow bg-white border-gray-100'>
			<span className='capitalize text-sm mb-1 text-gray-500'>
				{type.replace(/_/g, ' ')}
			</span>
			<button
				disabled={isSelected}
				onClick={() => handleAddIngredient(type)}
				type='button'
				className={`mt-2 px-2 py-1 rounded text-xs font-semibold transition ${
					isSelected
						? 'bg-gray-200 text-gray-400 cursor-not-allowed'
						: 'bg-orange-200 text-orange-700 hover:bg-orange-300 cursor-pointer'
				}`}>
				{isSelected ? 'Added' : 'Add'}
			</button>
		</div>
	);
}
