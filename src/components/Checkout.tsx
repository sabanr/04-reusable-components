import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Checkout: React.FC = () => {
	const user = useContext(UserContext);

	return <div>Checkout as {user}</div>;
};
export default Checkout;
