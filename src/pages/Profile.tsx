import { useLocation } from 'react-router-dom';

const Profile: React.FC = () => {
	const location = useLocation();
	const { username } = location.state || {};

	return <div>Profile for {username}</div>;
};
export default Profile;
