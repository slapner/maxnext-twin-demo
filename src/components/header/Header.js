/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';

import logo from '../../maxexlogo.webp';
import ProfileDropdown from './ProfileDropdown';

const SearchIcon = () => (
	<svg
		tw="h-5 w-5 text-gray-400"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		aria-hidden="true"
	>
		<path
			fillRule="evenodd"
			d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
			clipRule="evenodd"
		/>
	</svg>
);

const BellIcon = () => (
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
			d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
		/>
	</svg>
);

export default function Header() {
	return (
		<header tw="bg-white shadow w-screen relative">
			<div tw="w-screen mx-auto px-6 lg:divide-y lg:divide-gray-200">
				<div tw="relative h-16 flex justify-between">
					<div tw="relative z-10 px-2 flex lg:px-0">
						<div tw="flex-shrink-0 flex items-center">
							<img tw="block h-8 w-auto" src={logo} alt="Maxex" />
						</div>
					</div>
					<div tw="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
						<div tw="w-full sm:max-w-xs">
							<label htmlFor="search" tw="sr-only">
								Search
							</label>
							<div tw="relative">
								<div tw="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
									<SearchIcon />
								</div>
								<input
									id="search"
									name="search"
									tw="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									placeholder="Search"
									type="search"
								/>
							</div>
						</div>
					</div>

					<div tw="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
						<button tw="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							<span tw="sr-only">View notifications</span>
							<BellIcon />
						</button>

						<ProfileDropdown />
					</div>
				</div>
				<nav tw="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
					<SecondaryNavItem href="/">Home</SecondaryNavItem>
					<SecondaryNavItem isActive href="/">
						Flow Trades
					</SecondaryNavItem>
					<SecondaryNavItem href="/">Bulk Trades</SecondaryNavItem>
					<SecondaryNavItem href="/">Account Management</SecondaryNavItem>
				</nav>
			</div>
		</header>
	);
}

const SecondaryNavItem = styled.a(({ isActive }) => [
	tw`inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md`,
	isActive && tw`bg-gray-100`,
	!isActive && tw`hover:bg-gray-50 hover:text-gray-900`,
]);
