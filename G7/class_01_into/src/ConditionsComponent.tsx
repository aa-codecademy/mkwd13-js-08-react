import './ConditionsComponent.css';

export const ConditionsComponent = () => {
	const age = Math.random() * 50;
	console.log('🚀 ivo-test ~ ConditionsComponent ~ age:', age);

	return (
		<div>
			<h1>Student</h1>
			<p className='bold'>This is bold text</p>
			<p
				style={{
					color: age >= 18 ? 'yellow' : 'brown',
				}}>
				Seniority: {age >= 18 ? 'mature' : 'teenager'}
			</p>
		</div>
	);
};
