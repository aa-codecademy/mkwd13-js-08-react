import './App.css';
import { Fragment } from 'react';
import StudentDetails from './StudentDetails';
import AcademyDetails from './AcademyDetails';
import StyledComponent from './StyledComponent';
import { ListComponent } from './ListComponent';
import { ConditionsComponent } from './ConditionsComponent';
import Counter from './Counter';

function App() {
	const name = 'John Doe';
	// option 1: Adding an addition wrapper element
	return (
		<div>
			<h1>React Basics</h1>
			<StudentDetails name={name} />
			<AcademyDetails />
			<StyledComponent />
			<ListComponent />
			<ConditionsComponent />
			<Counter />
		</div>
	);
	// option 2: Adding an empty wrapper
	// return (
	// 	<>
	// 		<h1>React Basics</h1>
	// 		<div className='red-bg'>Test</div>
	// 	</>
	// );
	// option 3: Using a Fragment
	// return (
	// 	<Fragment>
	// 		<h1>React Basics</h1>
	// 		<div className='red-bg'>Test</div>
	// 	</Fragment>
	// );
	// option 4: Using an array (Try to avoid)
	// return [<div>item 1</div>, <div>item 2</div>];
}

// class Student {}

export default App;
