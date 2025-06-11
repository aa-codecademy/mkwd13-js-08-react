export default function Counter() {
	let counter = 0;

	const handleCount = () => {
		console.log('counter clicked', counter);
		counter++;
		console.log('incremented:', counter);
	};

	return (
		<div>
			<button type='button' onClick={handleCount}>
				Click to increment
			</button>
			<p>Count: {counter}</p>
		</div>
	);
}
