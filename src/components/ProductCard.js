import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import './productCard.css';
import toast from 'react-hot-toast';


function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
        <div className="card">
  <img src={product.image} className="card-img" alt={product.name} />
  <div className="card-body">
    <h5 className="card-title text-center mx-auto">{product.name}</h5>
    <p className="card-desc">{product.description}</p>
  </div>
  <hr className='priceline'></hr>
  <span className="price">${product.price.toFixed(2)}</span>
  <hr className='priceline'></hr>
  <div className="card-btns ">
    <Link to={`/product/${product.id}`} className="buy-now-btn card-btn">Buy Now</Link>
    <button
      type="button"
      className="addtochard-btn card-btn"
      onClick={() => {
        dispatch(addToCart(product));
        toast.success(`${product.name} added to cart`);
      }}
    >
      Add to Cart
    </button>
  </div>
</div>
    );
}
export default ProductCard;