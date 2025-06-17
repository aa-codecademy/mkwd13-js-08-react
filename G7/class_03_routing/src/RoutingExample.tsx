import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	useParams,
	useLocation,
} from 'react-router-dom';

const UserDetails = () => {
	const users = [
		{ name: 'John Doe', email: 'john.doe@mail.com', id: 41 },
		{ name: 'Mark Thomson', email: 'mark@mail.com', id: 42 },
		{ name: 'Jane Jackson', email: 'jane@mail.com', id: 43 },
	];

	const { userId } = useParams<{ userId: string }>();

	console.log(userId, typeof userId);

	const user = users.find(user => user.id === parseInt(userId!));

	if (!user) {
		return <h3>User with {userId} not found!</h3>;
	}

	return (
		<div>
			<h3>{user.name}</h3>
			<h3>{user.email}</h3>
			<h3>ID: {user.id}</h3>
		</div>
	);
};

const SearchUsers = () => {
	const users = [
		{ name: 'John Doe', email: 'john.doe@mail.com', id: 41 },
		{ name: 'Mark Thomson', email: 'mark@mail.com', id: 42 },
		{ name: 'Jane Jackson', email: 'jane@mail.com', id: 43 },
		{ name: 'John Johnson', email: 'jane@mail.com', id: 44 },
	];

	const { search } = useLocation();

	const params = new URLSearchParams(search);
	const query = params.get('q');

	return (
		<div>
			{users
				.filter(user => {
					if (query) {
						return user.name.toLowerCase().includes(query.toLowerCase());
					}
					return true;
				})
				.map(user => (
					<div key={user.id}>
						{user.name} | {user.id}
					</div>
				))}
		</div>
	);
};

const RoutingExample = () => {
	return (
		<BrowserRouter>
			<div
				style={{
					padding: '10px',
				}}>
				<h1>React Router Example</h1>
				<nav
					style={{
						display: 'flex',
						gap: '5px',
					}}>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/contact'>Contact</Link>
					<Link to='/user/42'>User Details</Link>
					<Link to='/users?q=jo'>Search Users</Link>
				</nav>

				<div>
					<Routes>
						<Route path='/' element={<h2>Home Page</h2>} />
						<Route path='/about' element={<h2>About Page</h2>} />
						<Route path='/contact' element={<h2>Contact Page</h2>} />
						<Route path='/user/:userId' element={<UserDetails />} />
						<Route path='/users' element={<SearchUsers />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

// localhost:5173/users?searchTerm=John&jobTitle=Developer
// const query = {
// 	searchTerm: 'John',
// 	jobTitle: 'Developer',
// };

export default RoutingExample;
