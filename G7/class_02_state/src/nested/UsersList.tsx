import { useState } from 'react';

export default function UsersList({ inputValue }: { inputValue: string }) {
	const users = ['Adam', 'Mark', 'John'];

	return (
		<ul>
			{users
				.filter(user => user.toLowerCase().includes(inputValue.toLowerCase()))
				.map(user => (
					<li key={user}>{user}</li>
				))}
		</ul>
	);
}
