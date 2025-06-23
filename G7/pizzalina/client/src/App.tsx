import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CustomPizzaPage from './pages/CustomPizzaPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/custom' element={<CustomPizzaPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
