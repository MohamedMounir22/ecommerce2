import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import allproducts  from '../data/products';

// NOTE: You would typically fetch your products from an API or have them in a central store/context.
// For this example, we'll simulate finding a product from a hardcoded list.
// Make sure this data is consistent with the data you pass to your ProductCard components.
const products = allproducts;

function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <Container style={{ padding: '2rem' }}>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} style={{ maxWidth: '400px', marginBottom: '1rem' }} />
            <p>{product.description}</p>
            <h2>${product.price}</h2>
        </Container>
    );
}

export default ProductDetail;