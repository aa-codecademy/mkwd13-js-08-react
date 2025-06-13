import { useState, type ChangeEvent } from 'react';

export default function Input({
	inputValue,
	setInputValue,
}: {
	inputValue: string;
	setInputValue: (value: string) => void;
}) {
	return (
		<input
			type='text'
			value={inputValue}
			onChange={(event: ChangeEvent<HTMLInputElement>) =>
				setInputValue(event.target.value)
			}
		/>
	);
}
