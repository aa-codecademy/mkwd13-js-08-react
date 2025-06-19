import { useContext } from 'react';
import { TodoContext } from './TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
	const { todos } = useContext(TodoContext);

	return (
		<ul>
			{todos.map(todo => (
				<TodoItem id={todo.id} text={todo.text} key={todo.id} />
			))}
		</ul>
	);
};

export default TodoList;
