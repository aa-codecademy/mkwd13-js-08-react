import { useEffect } from 'react';
import Child from './Child';

export default function Father() {
	useEffect(() => {
		console.log('Father is rerendered');
	});

	return (
		<div>
			<h1>Father Component</h1>
			<Child />
		</div>
	);
}
