import { configureStore } from '@reduxjs/toolkit';
import petsSlice from './pets.slice';

export const store = configureStore({
	reducer: {
		pets: petsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

// state.pizza.pizzas
// state.pizza.total
// state.pizza.page
// state.pizza.pageSize
// state.pizza.searchTerm
