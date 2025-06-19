import { createContext, useState, type ReactNode } from 'react';

// Defining the type of values inside the Context
type CounterContextValues = {
	count: number;
	onIncrement: () => void;
	onDecrement: () => void;
};

// Defining the default values
const defaultValues: CounterContextValues = {
	count: 0,
	onIncrement: () => void 0,
	onDecrement: () => void 0,
};

// Creating the context
export const CounterContext =
	createContext<CounterContextValues>(defaultValues);

// Creating the Context provider wrapper
const CounterProvider = ({ children }: { children: ReactNode }) => {
	const [count, setCount] = useState(0);

	const onIncrement = () => setCount(prevCount => prevCount + 1);
	const onDecrement = () => setCount(prevCount => prevCount - 1);

	return (
		<CounterContext.Provider value={{ count, onDecrement, onIncrement }}>
			{children}
		</CounterContext.Provider>
	);
};

export default CounterProvider;
