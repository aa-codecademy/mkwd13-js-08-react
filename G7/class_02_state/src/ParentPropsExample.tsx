import { useState } from 'react';
import ChildRandomNumber from './ChildRandomNumber';

export default function ParentPropsExample() {
	const [randomNumber, setRandomNumber] = useState(1);
	const [randomWord, setRandomWord] = useState('test');

	const words = ['juice', 'apple', 'banana', 'pc', 'glass'];

	return (
		<div>
			<h1>Parent Component</h1>
			<ChildRandomNumber randomNumber={randomNumber} randomWord={randomWord} />
			<button
				type='button'
				onClick={() => {
					setRandomNumber(Math.round(Math.random() * 100));
				}}>
				Generate a new random number
			</button>
			<button
				type='button'
				onClick={() => {
					setRandomWord(words[Math.round(Math.random() * 5)]);
				}}>
				Generate a new random word
			</button>
		</div>
	);
}
