export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  // payload: Todo[] // send as payload the filtered todo list
  payload: number; // the payload is going to have as a value the id of the todo we want to delete
}

export type TodoActionsTypes = AddTodoAction | DeleteTodoAction;
