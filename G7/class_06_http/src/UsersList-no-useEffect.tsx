import { useEffect, useState, type ChangeEvent } from 'react';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
}

export default function UsersListWithoutUseEffect() {
	const [users, setUsers] = useState<User[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get<User[]>(API_URL)
			.then(res => {
				console.log(res);
				setUsers(res.data);
				setFilteredUsers(res.data);
			})
			.catch(error => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	useEffect(() => {
		console.log('triggered filtering users');
		// const updatedFilteredUsers = users.filter(user =>
		// 	user.name.toLowerCase().includes(searchTerm.toLowerCase())
		// );
		// setFilteredUsers(updatedFilteredUsers);
	}, [users, searchTerm]);

	// if (isLoading) {
	// 	return <h3>Is Loading...</h3>;
	// }

	const shouldShowNoUserInfo = !isLoading && !error && !users?.length;
	const shouldShowError = !isLoading && error;
	const shouldShowUsersList = !isLoading && !!users?.length;

	return (
		<div>
			<h2>User List Without UseEffect</h2>
			<input
				type='search'
				placeholder='Search users...'
				value={searchTerm}
				onChange={(event: ChangeEvent<HTMLInputElement>) => {
					setSearchTerm(event.target.value);
					const updatedFilteredUsers = users.filter(user =>
						user.name.toLowerCase().includes(event.target.value.toLowerCase())
					);
					setFilteredUsers(updatedFilteredUsers);
				}}
			/>
			{isLoading && <h3>Is Loading...</h3>}
			{shouldShowError && <h3 style={{ color: 'red' }}>{error}</h3>}
			{shouldShowNoUserInfo && <p>No users available.</p>}
			{shouldShowUsersList && (
				<ul>
					{filteredUsers.map(user => (
						<li onClick={() => setSelectedUser(user)} key={user.id}>
							{user.name}
						</li>
					))}
				</ul>
			)}
			{selectedUser && (
				<div>
					<h3>{selectedUser.name}</h3>
					<h4>{selectedUser.username}</h4>
					<h5>{selectedUser.email}</h5>
					<h6>{selectedUser.website}</h6>
					<h6>{selectedUser.phone}</h6>
				</div>
			)}
		</div>
	);
}
