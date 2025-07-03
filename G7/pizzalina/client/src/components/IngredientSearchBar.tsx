import type { ChangeEvent } from 'react';

type IngredientSearchBarProps = {
	searchTerm: string;
	setSearchTerm: (text: string) => void;
};

export default function IngredientSearchBar({
	searchTerm,
	setSearchTerm,
}: IngredientSearchBarProps) {
	return (
		<div>
			<label className='block mb-2 text-gray-600 font-medium' htmlFor='search'>
				Search Ingredients
			</label>
			<input
				type='search'
				value={searchTerm}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setSearchTerm(e.target.value)
				}
				placeholder='Type to search...'
				className='mb-4 w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200'
			/>
		</div>
	);
}
