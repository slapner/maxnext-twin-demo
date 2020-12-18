/** @jsxImportSource @emotion/react */
import 'twin.macro';
import Header from './components/header/Header';

function App() {
	return (
		<div tw="flex flex-col w-screen h-screen overflow-hidden">
			<div tw="flex flex-row w-screen">
				<Header />
			</div>
			<div tw="flex flex-row flex-grow overflow-hidden bg-gray-100">
				<div tw="bg-indigo-700 md:flex md:flex-shrink-0">
					<div tw="flex flex-col w-64">
						<div tw="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
							<div tw="mt-5 flex-1 flex flex-col">
								<nav tw="flex-1 px-2 space-y-1"></nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
