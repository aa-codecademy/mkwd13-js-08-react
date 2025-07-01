import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CustomPizzaPage from './pages/CustomPizzaPage';
import OrderPizzaPage from './pages/OrderPizzaPage';
import { OrderProvider } from './context/OrderContext';

function App() {
	return (
		<OrderProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/custom' element={<CustomPizzaPage />} />
					<Route path='/order' element={<OrderPizzaPage />} />
				</Routes>
			</BrowserRouter>
		</OrderProvider>
	);
}

export default App;
