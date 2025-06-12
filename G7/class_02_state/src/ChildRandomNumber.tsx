import { useEffect } from 'react';

export default function ChildRandomNumber(props: {
	randomNumber: number;
	randomWord: string;
}) {
	console.log('ChildRandomNumber in component main scope');

	// Every rerender
	useEffect(() => {
		console.log('ChildRandomNumber in component empty useEffect');
	});

	// When component is initialized / mounted
	useEffect(() => {
		console.log(
			'ChildRandomNumber in component useEffect with no dependencies'
		);
	}, []);

	// When randomNumber is changed
	useEffect(() => {
		console.log(
			'ChildRandomNumber in component useEffect with randomNumber dependency',
			props.randomNumber
		);
	}, [props.randomNumber]);

	return (
		<div>
			<h2>Random number {props.randomNumber}</h2>
			<h2>Random word {props.randomWord}</h2>
		</div>
	);
}

// Rerendering when:
// 1. State is changed
// 2. Props are changed
