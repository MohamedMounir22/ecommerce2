import React from 'react';
import './home.css';
import LatestProducts from '../components/LatestProducts';


function Home() {
  return (
    <div>
      <div className="header-hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to our store</h1>
          <p className="hero-subtitle">Discover a wide range of high-quality shopping experience with fast delivery and exclusive deals.shopping experience with fast delivery and exclusive deals.shopping experience with fast delivery and exclusive deals.shopping experience with fast delivery and exclusive deals.shopping experience with fast delivery and exclusive deals.shopping experience with fast delivery and exclusive deals. products at competitive prices, all in one place. Enjoy a seamless shopping experience with fast delivery and exclusive deals.</p>
        </div>
      </div>
      <LatestProducts />

    </div>
  );
}

export default Home;