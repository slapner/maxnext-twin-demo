/** @jsxImportSource @emotion/react */
import 'twin.macro';

export default function DashboardStats() {
	return (
		<div tw="block">
			<dl tw="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:(grid-cols-5 divide-y-0 divide-x)">
				<Stat label="Average Turn Time" value="02:14:37:08" />
				<Stat label="Next Funding Date" value="07/25/2021" />
				<Stat label="Until Next Funding" value="06:11:45:32" />
				<Stat label="1,492 Total Loans" value="57 Batches" />
				<Stat label="Ready to Fund" value="29 Batches" />
			</dl>
		</div>
	);
}

const Stat = ({ label, value }) => (
	<div tw="px-4 py-5 sm:p-6">
		<dt tw="text-xs font-medium text-gray-500 truncate">{label}</dt>
		<dd tw="mt-1 text-lg font-semibold text-gray-900">{value}</dd>
	</div>
);
