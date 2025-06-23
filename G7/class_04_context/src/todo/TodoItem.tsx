import { useContext } from 'react';
import { TodoContext } from './TodoContext';

type TodoItemProps = {
	id: number;
	text: string;
};

const TodoItem = ({ id, text }: TodoItemProps) => {
	const { removeTodo } = useContext(TodoContext);

	return (
		<li>
			<span>{text}</span>{' '}
			<button type='button' onClick={() => removeTodo(id)}>
				Remove
			</button>
		</li>
	);
};

export default TodoItem;
