/** @jsxImportSource @emotion/react */
import 'twin.macro';
import logo from '../../maxexlogo.webp';
import {
	HomeIcon,
	UsersIcon,
	FolderIcon,
	CalendarIcon,
	InboxIcon,
	ChartIcon,
} from '../../icons/SidebarIcons';

import SidebarLink from './SidebarLink';

export default function Sidebar() {
	return (
		<div tw="flex flex-col h-0 flex-1 bg-gray-800">
			<div tw="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
				<div tw="flex items-center flex-shrink-0 px-4">
					<img tw="h-8 w-auto" src={logo} alt="MaxEx" />
				</div>
				<nav tw="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
					<SidebarLink isActive={true} label="Home" icon={<HomeIcon />} />

					<SidebarLink label="Team" icon={<UsersIcon />} />
					<SidebarLink label="Projects" icon={<FolderIcon />} />
					<SidebarLink label="Calendar" icon={<CalendarIcon />} />
					<SidebarLink label="Documents" icon={<InboxIcon />} />
					<SidebarLink label="Reports" icon={<ChartIcon />} />
				</nav>
			</div>
			<div tw="flex-shrink-0 flex bg-gray-700 p-4">
				<a href="/" tw="flex-shrink-0 w-full block" className="group">
					<div tw="flex items-center">
						<div>
							<img
								tw="inline-block h-9 w-9 rounded-full"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
						</div>
						<div tw="ml-3">
							<p tw="text-sm font-medium text-white">Tom Cook</p>
							<p tw="text-xs font-medium text-gray-300 group-hover:text-gray-200">
								View profile
							</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
}
