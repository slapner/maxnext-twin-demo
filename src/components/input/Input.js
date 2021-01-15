/** @jsxImportSource @emotion/react */
import 'twin.macro';

export default function Input({ label, ...otherProps }) {
	return (
		<div>
			{label && (
				<label htmlFor="input" tw="block text-sm font-medium text-gray-700">
					{label}
				</label>
			)}
			<div tw="mt-1">
				<input
					type="text"
					name="input"
					id="input"
					tw="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					{...otherProps}
				/>
			</div>
		</div>
	);
}
