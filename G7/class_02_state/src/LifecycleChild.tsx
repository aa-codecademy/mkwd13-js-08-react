import { useEffect, useState } from 'react';

export default function LifecycleChild() {
	const [timer, setTimer] = useState(0);
	const [fruits, setFruits] = useState<string[]>([]); // default type is never[] if not specified
	const [isLoading, setIsLoading] = useState(false);

	// Do not merge data into a state when the data is not connected to each other
	// const [state, setState] = useState<{
	// 	timer: number;
	// 	fruits: string[];
	// }>({
	// 	timer: 0,
	// 	fruits: [],
	// });

	useEffect(() => {
		setIsLoading(true);
		// mock of a fetch towards a backend API go fetch fruits
		setTimeout(() => {
			setFruits(['apple', 'banana', 'kiwi', 'cherry']);
			setIsLoading(false);
		}, 1500);
	}, []);

	useEffect(() => {
		console.log('Child component is mounted');
		const interval = setInterval(() => {
			setTimer(prevState => prevState + 1);
			console.log('Timer has been updated');
		}, 1000);
		console.log('Timer started.');
		return () => {
			clearInterval(interval);
			console.log('Timer cleared');
			console.log('Child component is unmounted');
		};
	}, []);

	if (isLoading) {
		return <h3>Is loading fruits...</h3>;
	}

	return (
		<div>
			<h2>Child component</h2>
			<h3>Timer: {timer}</h3>
			<ul>
				{fruits.map(fruit => (
					<li key={fruit}>{fruit}</li>
				))}
			</ul>
		</div>
	);
}
