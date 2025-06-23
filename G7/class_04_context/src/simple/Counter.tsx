import { useContext } from 'react';
import { CounterContext } from './SimpleContext';

export default function Counter() {
	const { count, onDecrement, onIncrement } = useContext(CounterContext);

	return (
		<div>
			<h3>Context Example</h3>
			<p>Count: {count}</p>
			<button type='button' onClick={onIncrement}>
				Increment +
			</button>
			<button type='button' onClick={onDecrement}>
				Decrement -
			</button>
		</div>
	);
}
