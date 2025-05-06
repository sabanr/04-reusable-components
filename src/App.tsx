import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/Homepage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const Nav = lazy(() => import('./components/Nav'));

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
