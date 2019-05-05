import React, { useState } from 'react';
import { API_URI } from './config';

export function RetrieveArt() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<button
				onClick={() => {
					setCount(count + 1);
					console.log(API_URI);
				}}
			>
				Click Here.
			</button>
		</div>
	);
}
