import React from 'react';
import Card from './Card';
import './Products.css'

const Products = () => {
    return (
        <div className='products' id='product'>
            <div>
                <h2>Products</h2>
                <Card />
            </div>
        </div>
    );
}

export default Products;
