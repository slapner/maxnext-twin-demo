/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { Transition } from '@headlessui/react';
import { css, cx } from '@emotion/css';
import { useState } from 'react';

const dropdownClasses = {
	enter: cx(css(tw`transition ease-out duration-100`)),
	enterFrom: cx(css(tw`transform opacity-0 scale-95`)),
	enterTo: cx(css(tw`transform opacity-100 scale-100`)),
	leave: cx(css(tw`transition ease-in duration-75`)),
	leaveFrom: cx(css(tw`transform opacity-100 scale-100`)),
	leaveTo: cx(css(tw`transform opacity-0 scale-95`)),
};

const MenuItem = ({ children }) => (
	<a
		href="/"
		tw="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
		role="menuitem"
	>
		{children}
	</a>
);

export default function ProfileDropdown() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div tw="flex-shrink-0 relative ml-4">
			<div>
				<button
					onClick={() => setIsOpen(!isOpen)}
					tw="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					id="user-menu"
					aria-haspopup="true"
				>
					<span tw="sr-only">Open user menu</span>
					<img
						tw="h-8 w-8 rounded-full"
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
				</button>
			</div>
			<Transition show={isOpen} {...dropdownClasses}>
				{(ref) => (
					<div
						ref={ref}
						tw="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="user-menu"
					>
						<MenuItem>Your Profile</MenuItem>

						<MenuItem>Settings</MenuItem>

						<MenuItem>Sign out</MenuItem>
					</div>
				)}
			</Transition>
		</div>
	);
}
