/** @jsxImportSource @emotion/react */
import 'twin.macro';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
	return (
		<div tw="flex flex-col w-screen h-screen">
			{/* <div tw="flex flex-row w-screen">
			</div> */}
			<Header />
			<div tw="bg-gray-100 flex overflow-hidden">
				<Sidebar />

				<Dashboard />
			</div>
		</div>
	);
}

export default App;
