import { useState } from 'react';
import './App.css';
import SimpleLoginForm from './SimpleLoginForm';
import EventRegistration from './EventRegistration';

function App() {
	const [showForm, setShowForm] = useState(false);

	return (
		<div>
			<EventRegistration />
			{showForm && <SimpleLoginForm />}
			{/* <button onClick={() => setShowForm(prevShowForm => !prevShowForm)}>
				{showForm ? 'Hide' : 'Show'}
			</button> */}
		</div>
	);
}

export default App;
