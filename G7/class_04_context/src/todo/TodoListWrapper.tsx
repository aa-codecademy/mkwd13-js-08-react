import { TodoProvider } from './TodoContext';
import TodoListContainer from './TodoListContainer';

export default function TodoListWrapper() {
	return (
		<div>
			<h2>Todo App</h2>
			<TodoProvider>
				{/* Todo Input */}
				<TodoListContainer />
			</TodoProvider>
		</div>
	);
}
