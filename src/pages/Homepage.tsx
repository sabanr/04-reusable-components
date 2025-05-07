import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HomePage: React.FC = () => {
	const [username, setUsername] = useState<string>('');
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('dashboard/profile', { state: { username } });
	};

	return (
		<div>
			HomePage
			<input
				type="text"
				title="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<button type="button" onClick={handleClick}>
				Go to profile page
			</button>
		</div>
	);
};
export default HomePage;
