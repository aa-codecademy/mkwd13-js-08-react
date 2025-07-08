import './App.css';
import PetForm from './components/pet-form';
import PetsList from './components/pets-list';

function App() {
	return (
		<div>
			<h1>Pet Collection App</h1>
			<p>
				Welcome to the Pet Collection! Add your favorite pets, feed them, and
				manage your collection. This app demonstrates how Redux can help
				organize and manage state in a React application.
			</p>
			<PetForm />
			<PetsList />
		</div>
	);
}

export default App;
