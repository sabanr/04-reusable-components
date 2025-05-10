import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Login: React.FC = () => {
	const [value, setValue] = useState<string>('');
	const userContext = useContext(UserContext);

	if (!userContext || !userContext.setUser) {
		throw new Error('UserContext is not properly initialized.');
	}

	const { setUser } = userContext;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (setUser) {
			setUser(value);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					title="login"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};
export default Login;
