import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementOne(state) {
      state.value++;
    },
    decrementOne(state) {
      state.value--;
    },
    incrementByValue(state, action) {
      console.log(action);

      state.value += action.payload;
    },
    decrementByValue(state, action) {
      console.log(action);

      state.value -= action.payload;
    },
  },
});

export const {
  incrementOne,
  decrementOne,
  incrementByValue,
  decrementByValue,
} = counterSlice.actions;

export default counterSlice.reducer;
