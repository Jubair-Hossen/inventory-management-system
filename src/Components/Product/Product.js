import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { name, price, url, description, supplier, quantities } = product;
    return (
        <div className='product-card'>
            <img src={url} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>Supplier: {supplier}</p>
            <p>Quantities: {quantities}</p>
            <button>Manage</button>
        </div>
    );
};

export default Product;