import { createContext, useState, type ReactNode } from 'react';

type Todo = { id: number; text: string };

type TodoContextType = {
	todos: Todo[];
	removeTodo: (id: number) => void;
	addTodo: (text: string) => void;
};

const defaultContextValues: TodoContextType = {
	todos: [],
	removeTodo: () => void 0,
	addTodo: () => void 0,
};

// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext<TodoContextType>(defaultContextValues);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
	const [todos, setTodos] = useState<Todo[]>([
		{
			id: 1,
			text: 'Write homework',
		},
		{
			id: 2,
			text: 'Walk the dog',
		},
	]);

	const addTodo = (text: string) => {
		// const isTodoTextDuplicate = todos.find(todo => todo.text === text);
		// const isTodoTextDuplicate = todos.every(todo => todo.text !== text);
		const isTodoTextDuplicate = todos.some(todo => todo.text === text);

		if (isTodoTextDuplicate) {
			alert('Duplicate todo!');
			return;
		}

		const id = todos.length + 1;
		// Preferred way of adding a new item to an array in state
		setTodos(tds => [...tds, { id, text }]);
	};

	const removeTodo = (id: number) => {
		console.log('remove the todo with ID:', id);
		// Preferred way to update array of items in state
		setTodos(tds => tds.filter(todo => todo.id !== id));

		// Alternative way to update array of items in state
		// const filteredListOfTodos = todos.filter(todo => todo.id !== id);
		// setTodos(filteredListOfTodos);
	};

	return (
		<TodoContext.Provider
			value={{
				todos,
				removeTodo,
				addTodo,
			}}>
			{children}
		</TodoContext.Provider>
	);
};
