import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useState } from "react";
import {
  ADD_TODO,
  DELETE_TODO,
  type Todo,
} from "../store/actions/todosActions";

export const Todos = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");

  const handleSubmit = () => {
    const todo: Todo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    };

    dispatch({ type: ADD_TODO, payload: todo });
    setNewTodoText("");
  };

  const handleDelete = (todoId: number) => {
    dispatch({ type: DELETE_TODO, payload: todoId });
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "10px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Todos example</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Todo name"
          value={newTodoText}
          onChange={(event) => {
            const value = event.target.value;
            setNewTodoText(value);
          }}
        />
        <button>Add Todo</button>
      </form>

      <div>
        <h3>Todo list: {todos.length} items</h3>
        {todos.map((todo) => (
          <div key={todo.id}>
            <span>
              {todo.completed ? "✅" : "⭕"} {todo.text}{" "}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
