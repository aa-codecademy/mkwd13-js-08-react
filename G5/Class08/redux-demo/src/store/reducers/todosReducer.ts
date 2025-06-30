import {
  ADD_TODO,
  DELETE_TODO,
  type Todo,
  type TodoActionsTypes,
} from "../actions/todosActions";

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [
    {
      id: 1,
      text: "Learn Redux basics",
      completed: false,
    },
    {
      id: 2,
      text: "Build todo app",
      completed: true,
    },
  ],
};

export const todosReducer = (
  state = initialState,
  actions: TodoActionsTypes
) => {
  switch (actions.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, actions.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== actions.payload),

        // this would be appoach if we send the filtered array upfront from the payload
        // todos: payload.todos
      };
    default:
      return state;
  }
};
