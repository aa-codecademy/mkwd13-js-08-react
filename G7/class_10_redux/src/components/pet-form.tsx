import { useState, type FormEvent } from 'react';
import { addPet } from '../store/pets.slice';
import { useDispatch } from 'react-redux';

const PET_TYPE_OPTIONS = [
	'Dog',
	'Cat',
	'Hamster',
	'Parrot',
	'Horse',
	'Bearded Dragon',
	'Rabbit',
	'Fish',
	'Snake',
];

export default function PetForm() {
	const [name, setName] = useState('');
	const [type, setType] = useState(PET_TYPE_OPTIONS[0]);
	const dispatch = useDispatch();

	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log(name, type);
		dispatch(addPet({ name, type }));
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<h2>Add a New Pet</h2>
			<input
				type='text'
				placeholder='Pet name'
				value={name}
				onChange={e => setName(e.target.value)}
				required
				style={{ marginRight: 8 }}
			/>
			<select
				onChange={e => setType(e.target.value)}
				value={type}
				style={{ marginRight: 8 }}>
				{PET_TYPE_OPTIONS.map(petType => (
					<option key={petType} value={petType}>
						{petType}
					</option>
				))}
			</select>
			<button type='submit'>Add Pet</button>
		</form>
	);
}
