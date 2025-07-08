import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export default function PetsList() {
	const pets = useSelector((state: RootState) => state.pets.pets);

	return (
		<div>
			<h2>Your Pets</h2>
			<ul>
				{pets.map(pet => (
					<li key={pet.name}>
						<strong>{pet.name}</strong> the {pet.type}
					</li>
				))}
			</ul>
		</div>
	);
}
