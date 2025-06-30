import {
  DECREMENT,
  INCREMENT,
  type CounterActionTypes,
} from "../actions/counterActions";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0, // default value
};

// THE REDUCER MUST NOT MUTATE THE STATE
export const counterReducer = (
  state = initialState,
  actions: CounterActionTypes
) => {
  switch (actions.type) {
    // actions.type === "INCREMENT"
    case INCREMENT:
      // NEVER MUTATE THE STATE
      //   state.count + 1;
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
