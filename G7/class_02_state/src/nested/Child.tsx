import { useEffect } from 'react';

export default function Child() {
	useEffect(() => {
		console.log('Child is rerendered');
	});

	return (
		<div>
			<h1>Child Component</h1>
		</div>
	);
}
