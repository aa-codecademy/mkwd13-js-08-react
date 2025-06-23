import { useContext, useState, type ChangeEvent } from 'react';
import { TodoContext } from './TodoContext';

const TodoInput = () => {
	const { addTodo } = useContext(TodoContext);
	const [text, setText] = useState('');

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				console.log(text);
				if (!text.length) {
					alert('You can not submit empty todo!');
					return;
				}
				addTodo(text);
			}}>
			<input
				type='text'
				value={text}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
			/>
			<button type='submit'>Add Todo</button>
		</form>
	);
};

export default TodoInput;
