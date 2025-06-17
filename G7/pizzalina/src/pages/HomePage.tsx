import PizzaCard from '../components/PizzaCard';
import { pizzas } from '../const/pizzas';

export default function HomePage() {
	console.log(pizzas);

	return (
		<div>
			<header>
				<h1>🍕 Pizzalina</h1>
				<nav>
					<button>Create Custom Pizza</button>
					<button>View Orders</button>
				</nav>
			</header>

			<article>
				{pizzas.map(pizza => (
					<PizzaCard pizza={pizza} />
				))}
			</article>
		</div>
	);
}

// Used for debugging of objects and arrays
/* <pre>{JSON.stringify(pizza.ingredients)}</pre> */
