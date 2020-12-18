/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export default function SidebarLink({ label, isActive = false, icon }) {
	const linkStyles = isActive
		? tw`bg-gray-900 text-white`
		: tw`text-gray-300 hover:bg-gray-700 hover:text-white`;
	const iconStyles = isActive
		? tw`text-gray-300`
		: tw`text-gray-400 group-hover:text-gray-300`;
	return (
		<a
			href="/"
			className="group"
			css={[
				tw`flex items-center px-2 py-2 text-sm font-medium rounded-md`,
				linkStyles,
			]}
		>
			<svg
				css={[tw`mr-3 h-6 w-6`, iconStyles]}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				{icon}
			</svg>
			{label}
		</a>
	);
}
