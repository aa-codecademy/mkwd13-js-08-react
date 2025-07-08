import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { removePet, feedPet, resetHunger } from '../store/pets.slice';

export default function PetsList() {
	const pets = useSelector((state: RootState) => state.pets.pets);
	const dispatch = useDispatch();

	return (
		<div>
			<h2>Your Pets</h2>
			<ul>
				{pets.map(pet => (
					<li key={pet.name}>
						<strong>{pet.name}</strong> the {pet.type} -{' '}
						{pet.isFed ? ' 🥗 Fed' : ' 🍖 Hungry'}
						<button
							type='button'
							onClick={() => dispatch(feedPet(pet.id))}
							disabled={pet.isFed}
							style={{ marginLeft: 4 }}>
							Feed
						</button>
						<button
							type='button'
							onClick={() => dispatch(resetHunger(pet.id))}
							disabled={!pet.isFed}
							style={{ marginLeft: 4 }}>
							Reset Hunger
						</button>
						<button
							type='button'
							style={{ marginLeft: 4 }}
							onClick={() => dispatch(removePet(pet.id))}>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
