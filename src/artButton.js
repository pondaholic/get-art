import React, { useState } from 'react';

export function RetrieveArt() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<button
				onClick={() => {
					setCount(count + 1);
					console.log(count);
				}}
			>
				Click Here.
			</button>
		</div>
	);
}
