function StudentDetails(props: { name: string }) {
	const age = 20;

	return (
		<div className='red-bg'>
			<h1>Name: {props.name}</h1>
			<h2>Location: Skopje, Macedonia</h2>
			<h3>Age: {age}</h3>
			<p>
				John is a student of <span className='bold'>software engineering</span>
			</p>
		</div>
	);
}

export default StudentDetails;
