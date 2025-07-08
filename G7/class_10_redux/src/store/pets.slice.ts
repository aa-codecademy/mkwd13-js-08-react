import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Pet {
	id: number;
	name: string;
	type: string;
	isFed: boolean;
}

interface PetsSlice {
	pets: Pet[];
}

const initialState: PetsSlice = {
	pets: [],
};

const petsSlice = createSlice({
	name: 'pets',
	initialState,
	reducers: {
		addPet: (state, action: PayloadAction<{ name: string; type: string }>) => {
			const newPet: Pet = {
				id: 1,
				name: action.payload.name,
				type: action.payload.type,
				isFed: false,
			};
			state.pets.push(newPet);
		},
		// removePet: () => {},
	},
});

export const { addPet } = petsSlice.actions;
export default petsSlice.reducer;
