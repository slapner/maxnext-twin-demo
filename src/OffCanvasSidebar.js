/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { css, cx } from '@emotion/css';

import logo from './maxexlogo.webp';

import {
	HomeIcon,
	UsersIcon,
	FolderIcon,
	CalendarIcon,
	InboxIcon,
	ChartIcon,
} from './icons/SidebarIcons';
import SidebarLink from './components/sidebar/SidebarLink';

const overlayClasses = {
	enter: cx(css(tw`transition-opacity ease-linear duration-300`)),
	enterFrom: cx(css(tw`opacity-0`)),
	enterTo: cx(css(tw`opacity-100`)),
	leave: cx(css(tw`transition-opacity ease-linear duration-300`)),
	leaveFrom: cx(css(tw`opacity-100`)),
	leaveTo: cx(css(tw`opacity-0`)),
};

const sidebarClasses = {
	enter: cx(css(tw`transition ease-in-out duration-300 transform`)),
	enterFrom: cx(css(tw`-translate-x-full`)),
	enterTo: cx(css(tw`translate-x-0`)),
	leave: cx(css(tw`transition ease-in-out duration-300 transform`)),
	leaveFrom: cx(css(tw`translate-x-0`)),
	leaveTo: cx(css(tw`-translate-x-full`)),
};

export default function OffCanvasSidebar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div tw="md:hidden">
			<div tw="fixed inset-0 flex z-40">
				<Transition show={isOpen} {...overlayClasses}>
					{(ref) => (
						<div tw="fixed inset-0" ref={ref}>
							<div tw="absolute inset-0 bg-gray-600 opacity-75"></div>
						</div>
					)}
				</Transition>

				<Transition show={isOpen} {...sidebarClasses}>
					{(ref) => (
						<div
							tw="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800"
							ref={ref}
						>
							<div tw="absolute top-0 right-0 -mr-12 pt-2">
								<button
									onClick={() => setIsOpen(!isOpen)}
									tw="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								>
									<span tw="sr-only">Close sidebar</span>
									{/* Heroicon name: x */}
									<svg
										tw="h-6 w-6 text-white"
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
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
							<div tw="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
								<div tw="flex-shrink-0 flex items-center px-4">
									<img tw="h-8 w-auto" src={logo} alt="MaxEx" />
								</div>
								<nav tw="mt-5 px-2 space-y-1">
									<SidebarLink
										isActive={true}
										label="Home"
										icon={<HomeIcon />}
									/>

									<SidebarLink label="Team" icon={<UsersIcon />} />
									<SidebarLink label="Projects" icon={<FolderIcon />} />
									<SidebarLink label="Calendar" icon={<CalendarIcon />} />
									<SidebarLink label="Documents" icon={<InboxIcon />} />
									<SidebarLink label="Reports" icon={<ChartIcon />} />
								</nav>
							</div>
							<div tw="flex-shrink-0 flex bg-gray-700 p-4">
								<a href="/" tw="flex-shrink-0 block" className="group">
									<div tw="flex items-center">
										<div>
											<img
												tw="inline-block h-10 w-10 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>
										<div tw="ml-3">
											<p tw="text-base font-medium text-white">Tom Cook</p>
											<p tw="text-sm font-medium text-gray-400 group-hover:text-gray-300">
												View profile
											</p>
										</div>
									</div>
								</a>
							</div>
						</div>
					)}
				</Transition>

				<div tw="flex-shrink-0 w-14" onClick={() => setIsOpen(!isOpen)}>
					{/* Force sidebar to shrink to fit close icon */}
				</div>
			</div>
		</div>
	);
}
