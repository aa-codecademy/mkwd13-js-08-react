import type { Pizza } from '../types/pizza';

type PizzaCardProps = {
	pizza: Pizza;
};

export default function PizzaCard({ pizza }: PizzaCardProps) {
	return (
		<div key={pizza.name}>
			<img
				src='https://images.pexels.com/photos/12352497/pexels-photo-12352497.jpeg'
				alt=''
			/>
			<h3>{pizza.name}</h3>
			<p>{pizza.description}</p>
			<div>
				{pizza.ingredients.map(ingredient => (
					<span
						style={{
							marginRight: '5px',
						}}>
						<span>{ingredient.type}</span> <span>{ingredient.amount}g</span>
						<span>, </span>
					</span>
				))}
			</div>
			<div>${pizza.price.toFixed(2)}</div>
			<div>
				<button type='button'>Order Now</button>
				<button type='button'>Customize</button>
			</div>
		</div>
	);
}
