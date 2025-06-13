import { useEffect, useState } from 'react';
import Input from './Input';
import UsersList from './UsersList';

export default function SearchUsers() {
	const [inputValue, setInputValue] = useState<string>('');

	useEffect(() => {
		console.log('SearchInput is rerendered');
	});

	return (
		<div>
			<Input inputValue={inputValue} setInputValue={setInputValue} />
			<UsersList inputValue={inputValue} />
		</div>
	);
}
