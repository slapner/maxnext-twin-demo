import tw from 'twin.macro';

/** @jsxImportSource @emotion/react */
import 'twin.macro';
import DashboardStats from './DashboardStats';
import ActivityFeed from '../activity-feed/ActivityFeed';

// export default function Dashboard() {
// 	return (
// 		<div tw="py-6 px-4 flex space-x-8 overflow-y-auto flex-grow bg-gray-100">
// 			<div tw="w-3/4 flex flex-col">
// 				<PageHeading>Funding & Settlement Pipeline</PageHeading>
// 				<DashboardStats />
// 			</div>
// 			<div>
// 				<ActivityFeed />
// 			</div>
// 		</div>
// 	);
// }

export default function Dashboard() {
	return (
		<div tw="overflow-y-auto flex p-4 space-x-4 flex-grow">
			<div tw="w-3/4">
				<PageHeading>Funding & Settlement Pipeline</PageHeading>
				<DashboardStats />
			</div>
			<div tw="flex flex-shrink">
				<ActivityFeed />
			</div>
		</div>
	);
}

const PageHeading = tw.h2`text-3xl px-2 font-light leading-7 text-gray-900`;
