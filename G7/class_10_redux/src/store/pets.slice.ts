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
				id: Date.now(),
				name: action.payload.name,
				type: action.payload.type,
				isFed: false,
			};
			state.pets.push(newPet);
		},
		removePet: (state, action: PayloadAction<number>) => {
			state.pets = state.pets.filter(pet => pet.id !== action.payload);
		},
		feedPet: (state, action: PayloadAction<number>) => {
			state.pets = state.pets.map(pet => {
				if (pet.id === action.payload) {
					return {
						...pet,
						isFed: true,
					};
				}
				return pet;
			});
		},
		resetHunger: (state, action: PayloadAction<number>) => {
			state.pets = state.pets.map(pet => {
				if (pet.id === action.payload) {
					return {
						...pet,
						isFed: false,
					};
				}

				return pet;
			});
		},
	},
});

export const { addPet, removePet, feedPet, resetHunger } = petsSlice.actions;
export default petsSlice.reducer;
