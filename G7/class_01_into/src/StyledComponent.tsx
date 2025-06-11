const style = {
	backgroundColor: 'green',
	color: 'white',
	padding: '10px',
	margin: '10px 20px',
	borderRadius: '5px',
};

export default function StyledComponent() {
	return (
		<div style={style}>
			<h2>Inline Styled Component</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
				deserunt vero culpa eum soluta id illum sunt. Tenetur, soluta commodi
				dolorum nulla quia assumenda. Corrupti ut mollitia dicta commodi
				deserunt.
			</p>
		</div>
	);
}
