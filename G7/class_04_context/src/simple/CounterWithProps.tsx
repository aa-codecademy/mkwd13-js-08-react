type CounterWithProps = {
	count: number;
	onIncrement: () => void;
	onDecrement: () => void;
};

export default function CounterWithProps({
	count,
	onIncrement,
	onDecrement,
}: CounterWithProps) {
	return (
		<div>
			<h3>Props Example</h3>
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
