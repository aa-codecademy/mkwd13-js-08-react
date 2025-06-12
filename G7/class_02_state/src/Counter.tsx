import { useState } from 'react';

export default function Counter() {
	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		setCounter(counter + 1);
		console.log('clicked', counter);
	};

	return (
		<div>
			<button type='button' onClick={handleClick}>
				Click to increment
			</button>
			<p>Count: {counter}</p>
		</div>
	);
}
