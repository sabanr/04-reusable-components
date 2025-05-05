import React, { useState } from 'react';

const App: React.FC = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			{count}
			<button type="button" onClick={() => setCount((c) => c + 1)}>
				Increment
			</button>
			<button type="button" onClick={() => setCount((c) => c - 1)}>
				Decrement
			</button>
		</div>
	);
};
export default App;
