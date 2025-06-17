import { useState } from 'react';

const AboutUs = () => {
	return (
		<div style={{ backgroundColor: 'green' }}>
			<h2>About Us Page</h2>
		</div>
	);
};

const ContactUs = () => (
	<div style={{ backgroundColor: 'yellow' }}>
		<h2>Contact Us Page</h2>
	</div>
);

const Academy = () => (
	<div style={{ backgroundColor: 'red' }}>
		<h2>Academy Page</h2>
	</div>
);

const NoRoutingExample = () => {
	const [page, setPage] = useState<'home' | 'about' | 'contact' | 'academy'>(
		'home'
	);

	return (
		<div>
			<h1>Single Page App Without Routing</h1>
			<nav>
				<button
					style={{
						backgroundColor: page === 'home' ? 'gray' : '',
					}}
					type='button'
					onClick={() => setPage('home')}>
					Home
				</button>
				<button
					style={{
						backgroundColor: page === 'about' ? 'gray' : '',
					}}
					type='button'
					onClick={() => setPage('about')}>
					About us
				</button>
				<button
					style={{
						backgroundColor: page === 'contact' ? 'gray' : '',
					}}
					type='button'
					onClick={() => setPage('contact')}>
					Contact us
				</button>
				<button
					style={{
						backgroundColor: page === 'academy' ? 'gray' : '',
					}}
					type='button'
					onClick={() => setPage('academy')}>
					Academy
				</button>
			</nav>
			{page === 'home' && <p>This is the home page</p>}
			{page === 'about' && <AboutUs />}
			{page === 'contact' && <ContactUs />}
			{page === 'academy' && <Academy />}
		</div>
	);
};

export default NoRoutingExample;
