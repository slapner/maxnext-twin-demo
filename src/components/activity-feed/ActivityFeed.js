/** @jsxImportSource @emotion/react */
import 'twin.macro';

const users = [
	{
		name: 'Tenille Brown',
		avatar:
			'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
	},
	{
		name: 'Jessica Crofton',
		avatar:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
	},
	{
		name: 'Daniel Russo',
		avatar:
			'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
	},
];

const feed = [
	{
		user: users[1],
		timeStamp: '09:23 PM. Today',
		info: 'Added you to K228495 Pay History Task',
	},
	{
		user: users[0],
		timeStamp: '09:23 PM. Today',
		info: 'Completed H495906 Funding Memo Task',
	},
	{
		user: users[0],
		timeStamp: '09:23 PM. Today',
		info: 'Uploaded PG59922 Curtailments to Pay History',
	},
	{
		user: users[2],
		timeStamp: '09:23 PM. Today',
		info: 'Added you to G004813 Collateral Approval',
	},
	{
		user: users[0],
		timeStamp: '09:23 PM. Today',
		info: 'Completed H495906 Pay History Task',
	},
	{
		user: users[0],
		timeStamp: '09:23 PM. Today',
		info: 'Completed IB773935 Purchase Advice',
	},
];

export default function ActivityFeed() {
	return (
		<div tw="flex flex-col overflow-hidden">
			<h3 tw="text-lg font-bold mb-2">Activity Feed</h3>
			<div tw="flex overflow-y-auto">
				<ul tw="divide-y divide-gray-200 space-y-2">
					{feed.map((item) => (
						<ActivityFeedItem key={item.info} {...item} />
					))}
				</ul>
			</div>
		</div>
	);
}

const ActivityFeedItem = ({ user = {}, timeStamp = '', info = '' }) => (
	<li tw="px-4 py-6 bg-white shadow rounded-lg">
		<div tw="flex space-x-3">
			<img tw="h-6 w-6 rounded-full" src={user.avatar} alt="" />
			<div tw="flex-1 space-y-1">
				<div tw="flex items-center justify-between">
					<h3 tw="text-sm font-medium">{user.name}</h3>
					<p tw="text-sm text-gray-500">{timeStamp}</p>
				</div>
				<p tw="text-sm text-gray-500">{info}</p>
			</div>
		</div>
	</li>
);
