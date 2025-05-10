import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Checkout: React.FC = () => {
	const userContext = useContext(UserContext);

	if (!userContext) {
		throw new Error('UserContext is not properly initialized.');
	}

	const { user } = userContext;

	return <div>Checkout as {user || 'guest'}</div>;
};
export default Checkout;
