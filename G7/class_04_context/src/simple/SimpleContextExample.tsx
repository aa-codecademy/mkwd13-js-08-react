import { useState } from 'react';
import CounterWithProps from './CounterWithProps';
import CounterProvider from './SimpleContext';
import Counter from './Counter';

export default function SimpleContextExample() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h2>Simple Context API Example</h2>
			<div style={{ display: 'flex', gap: 32 }}>
				<div>
					<CounterWithProps
						count={count}
						onIncrement={() => setCount(prevCount => prevCount + 1)}
						onDecrement={() => setCount(prevCount => prevCount - 1)}
					/>
				</div>
				<div>
					<CounterProvider>
						<Counter />
					</CounterProvider>
				</div>
			</div>

			<p>Left: Prop drilling. Right Context API</p>
		</div>
	);
}
