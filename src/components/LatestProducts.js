import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import './latestProducts.css';
import { setFilter, selectFilteredProducts, selectFilter } from '../store/productsSlice';

function LatestProducts() {
	const dispatch = useDispatch();
	const filteredProducts = useSelector(selectFilteredProducts);
	const selectedCategory = useSelector(selectFilter);

	return (
		<section className="latest-section">
			<h2 className="latest-title">Latest Products</h2>
			{/* buttons for filtering products button for all and electronics and accessories  */}
			<div className="filter-buttons">
				{['All', 'Clothing', 'Electronics', 'Furniture', 'accessories'].map((cat) => (
					<button
						key={cat}
						className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
						onClick={() => dispatch(setFilter(cat))}
					>
						{cat}
					</button>
				))}
			</div>
			<div className="latest-grid">
				{filteredProducts.map((p) => (
					<ProductCard key={p.id} product={p} />
				))}
			</div>
		</section>
	);
}

export default LatestProducts;
