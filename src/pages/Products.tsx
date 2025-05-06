import { useParams } from 'react-router-dom';

const Products: React.FC = () => {
	const { id } = useParams();

	return (
		<>
			<h1>Products List</h1>
			<p>Showing product {id}</p>
		</>
	);
};
export default Products;
