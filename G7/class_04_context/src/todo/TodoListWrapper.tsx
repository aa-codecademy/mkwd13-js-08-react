import { TodoProvider } from './TodoContext';
import TodoInput from './TodoInput';
import TodoListContainer from './TodoListContainer';

export default function TodoListWrapper() {
	return (
		<div>
			<h2>Todo App</h2>
			<TodoProvider>
				<TodoInput />
				<TodoListContainer />
			</TodoProvider>
		</div>
	);
}
