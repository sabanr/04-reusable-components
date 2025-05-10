import { lazy, useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';

// const Profile = lazy(() => import('./pages/Profile'));
// const HomePage = lazy(() => import('./pages/Homepage'));
// const Settings = lazy(() => import('./pages/Settings'));
// const Products = lazy(() => import('./pages/Products'));
// const Dashboard = lazy(() => import('./pages/Dashboard'));
const Checkout = lazy(() => import('./components/Checkout'));
// const PageNotFound = lazy(() => import('./pages/PageNotFound'));

// const Nav = lazy(() => import('./components/Nav'));

const App: React.FC = () => {
	const [user, setUser] = useState<string>('guest');

	return (
		<>
			<input
				title="user"
				type="text"
				value={user}
				onChange={(e) => setUser(e.target.value)}
			/>
			<UserContext.Provider value={user}>
				<Checkout />
				{/* <BrowserRouter>
					<Nav />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/products/:id" element={<Products />} />
						<Route path="/dashboard" element={<Dashboard />}>
							<Route path="settings" element={<Settings />} />
							<Route path="profile" element={<Profile />} />
						</Route>
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</BrowserRouter> */}
			</UserContext.Provider>
		</>
	);
};
export default App;
