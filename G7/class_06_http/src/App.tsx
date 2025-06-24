import './App.css';
import SimpleDogImageApp from './SimpleDogImageApp';
import UsersList from './UsersList';
import UsersListWithoutUseEffect from './UsersList-no-useEffect';

function App() {
	return (
		<>
			{/* <SimpleDogImageApp /> */}
			<div
				style={{
					display: 'flex',
				}}>
				<div>
					<UsersList />
				</div>
				<div>
					<UsersListWithoutUseEffect />
				</div>
			</div>
		</>
	);
}

export default App;
