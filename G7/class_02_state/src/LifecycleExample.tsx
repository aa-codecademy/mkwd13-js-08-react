import { useState } from 'react';
import LifecycleChild from './LifecycleChild';

export default function LifecycleExample() {
	const [shouldShowChild, setShouldShowChild] = useState(true);

	return (
		<div>
			<h1>Lifecycle Example</h1>
			<button
				type='button'
				onClick={() => setShouldShowChild(!shouldShowChild)}>
				{shouldShowChild ? 'Hide' : 'Show'} child
			</button>
			{shouldShowChild && <LifecycleChild />}
		</div>
	);
}
