import type { Pizza } from '../types/pizza';

type PizzaCardProps = {
	pizza: Pizza;
};

const btnClasses = `px-1.5 py-0.5 bg-orange-600 hover:bg-orange-700 text-white transition rounded shadow whitespace-nowrap`;

export default function PizzaCard({ pizza }: PizzaCardProps) {
	return (
		<div
			key={pizza.name}
			className='bg-white rounded-xl shadow p-4 flex flex-col'>
			<img
				className='w-full h-40 object-cover rounded mb-3'
				src={pizza.imageUrl}
				alt=''
			/>
			<h3 className='text-xl font-bold mb-1 text-orange-600'>{pizza.name}</h3>
			<p className='text-gray-500 mb-2 line-clamp-2'>{pizza.description}</p>
			<div className='flex flex-wrap gap-1 mb-2'>
				{pizza.ingredients.map(ingredient => (
					<span className='flex items-center gap-1 bg-orange-50 px-2 py-1 rounded text-xs'>
						<span className='capitalize text-gray-500'>
							{ingredient.type.replace(/_/g, ' ')}
						</span>
						<span className='text-gray-400'>{ingredient.amount}g</span>
					</span>
				))}
			</div>
			<div className='flex justify-between items-center mt-auto gap-2'>
				<span className='text-lg font-semibold text-orange-500'>
					${pizza.price.toFixed(2)}
				</span>
				<div className='flex gap-1 flex-wrap'>
					<button className={btnClasses} type='button'>
						Order Now
					</button>
					<button className={btnClasses} type='button'>
						Customize
					</button>
				</div>
			</div>
		</div>
	);
}
