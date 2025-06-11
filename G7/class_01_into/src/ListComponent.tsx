export const ListComponent = () => {
	const students = [
		{ id: 1, name: 'John Doe', age: 20 },
		{ id: 2, name: 'Jane Doe', age: 21 },
		{ id: 3, name: 'Jack Doe', age: 22 },
		{ id: 4, name: 'Josh Doe', age: 23 },
	];

	return (
		<div>
			<h1>List of students</h1>
			<ul>
				{students.map(student => (
					<li key={student.id}>
						{student.name} - {student.age}
					</li>
				))}
			</ul>
		</div>
	);
};
