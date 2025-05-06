import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/dashboard">Dashboard</Link>
		</div>
	);
};
export default Nav;
