import type { ReactNode } from 'react';

export default function Layout(props: { children: ReactNode }) {
	return (
		<>
			<h1>Welcome to my website</h1>
			<div
				style={{
					display: 'flex',
					border: '1px solid black',
				}}>
				<div
					style={{
						border: '1px solid black',
					}}>
					Sidebar
				</div>
				<div
					style={{
						border: '1px solid black',
					}}>
					{props.children}
				</div>
			</div>
		</>
	);
}
