/** @jsxImportSource @emotion/react */
import 'twin.macro';

import OffCanvasSidebar from './OffCanvasSidebar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
	return (
		<div tw="h-screen flex overflow-hidden bg-gray-100">
			{/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
			<OffCanvasSidebar />
			{/* Static sidebar for desktop */}
			<div tw="hidden md:flex md:flex-shrink-0">
				<div tw="flex flex-col w-64">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<Sidebar />
				</div>
			</div>
			<div tw="flex flex-col w-0 flex-1 overflow-hidden">
				<div tw="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
					<button tw="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
						<span tw="sr-only">Open sidebar</span>
						{/* Heroicon name: menu */}
						<svg
							tw="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
				<main
					tw="flex-1 relative z-0 overflow-y-auto focus:outline-none"
					tabIndex="0"
				>
					<div tw="py-6">
						<div tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<h1 tw="text-2xl font-semibold text-gray-900">Dashboard</h1>
						</div>
						<div tw="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
							{/* Replace with your content */}
							<div tw="py-4">
								<div tw="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
							</div>
							{/* /End replace */}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
