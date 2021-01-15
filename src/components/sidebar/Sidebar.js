/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';

const navItems = [
	{
		parent: 'Marketplace',
		badgeCount: '1,734',
		childLinks: ['Eligibility', 'Programs & Products', 'Pricing', 'Lock Desk'],
	},
	{
		parent: 'Diligence',
		badgeCount: '972',
		childLinks: ['Credit', 'Compliance', 'Valuation', 'Exceptions'],
	},
	{
		parent: 'Funding & Settlement',
		badgeCount: '1,492',
		isActive: true,
		childLinks: [
			'Pay History',
			'Funding Memo',
			'Purchase Advice',
			'Record Funding',
			'Wire & Reconciliation',
		],
	},
	{
		parent: 'Collateral',
		badgeCount: '1,492',
		childLinks: ['Ship', 'Track', 'Exceptions', 'Approve'],
	},
	{
		parent: 'Servicing',
		badgeCount: '717',
		childLinks: ['Manage', 'Transfer'],
	},
];

export default function Sidebar() {
	return (
		<div tw="bg-white flex-shrink-0 w-64 px-4 pt-2 pb-8 overflow-y-auto">
			<nav tw="flex-1 px-2 space-y-1">
				<div tw="border-b border-gray-200 py-2">
					<NavGroupParent href="/">Flow Trades Dashboard</NavGroupParent>
				</div>
				{navItems.map((item) => (
					<NavGroup key={item.parent} {...item} />
				))}
			</nav>
		</div>
	);
}

const NavGroup = ({
	parent = 'Parent',
	badgeCount = 0,
	childLinks = [],
	isActive = false,
}) => (
	<>
		<NavGroupParent href="/" isActive={isActive}>
			{parent} <Badge>{badgeCount}</Badge>
		</NavGroupParent>
		<div tw="space-y-1">
			{childLinks.map((item) => (
				<NavLink className="group" href="/">
					{item}
				</NavLink>
			))}
		</div>
	</>
);

const NavLink = styled.a(({ isActive }) => [
	tw`flex items-center w-full py-2 pl-10 pr-2 text-sm font-medium text-gray-600 rounded-md`,
	!isActive && tw`hover:(text-green-500 bg-gray-50)`,
	isActive && tw`text-green-500 bg-gray-50`,
]);

const NavGroupParent = styled.a(({ isActive }) => [
	tw`flex items-center p-2 text-base font-medium text-gray-600`,
	isActive && tw`text-green-500`,
	!isActive && tw`transition duration-200 hover:text-green-500`,
]);

const Badge = tw.span`bg-gray-100 ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full`;
