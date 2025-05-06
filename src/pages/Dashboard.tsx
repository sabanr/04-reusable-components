import { Outlet, Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="profile">Profile</Link>
				</li>
				<li>
					<Link to="settings">Settings</Link>
				</li>
			</ul>
			Dashboard
			<Outlet />
		</div>
	);
};
export default Dashboard;
