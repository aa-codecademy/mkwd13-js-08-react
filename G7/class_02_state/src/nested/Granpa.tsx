import { useEffect } from 'react';
import Father from './Father';
import SearchUsers from './SearchUsers';

export default function Grandpa() {
	useEffect(() => {
		console.log('Grandpa is rerendered');
	});

	return (
		<div>
			<h1>Grandpa Component</h1>
			<SearchUsers />
			<Father />
		</div>
	);
}
