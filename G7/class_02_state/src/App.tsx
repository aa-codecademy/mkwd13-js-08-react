import './App.css';
import Counter from './Counter';
import Layout from './Layout';
import LifecycleExample from './LifecycleExample';
import Grandpa from './nested/Granpa';
import ParentPropsExample from './ParentPropsExample';

function App() {
	return (
		<>
			{/* <Counter /> */}
			{/* <ParentPropsExample /> */}
			{/* <LifecycleExample /> */}
			{/* <Layout>
				<h1>Main content</h1>
				<h2>This is first example</h2>
			</Layout>
			<Layout>
				<h1>Some Article</h1>
				<h2>This is second example</h2>
			</Layout> */}
			<Grandpa />
		</>
	);
}

export default App;
