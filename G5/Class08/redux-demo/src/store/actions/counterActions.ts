enum Actions {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Counter actions interfaces
// We could use the enum also
export interface IncrementAction {
  type: typeof INCREMENT;
}
// We could use the enum also
export interface DecrementAction {
  type: typeof DECREMENT;
}

export type CounterActionTypes = IncrementAction | DecrementAction;
