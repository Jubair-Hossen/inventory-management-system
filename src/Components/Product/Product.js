import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { name, price, url, description, supplier, quantities, _id } = product;
    const navigate = useNavigate();
    return (
        <div className='product-card'>
            <img src={url} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>Supplier: {supplier}</p>
            <p>Quantities: {quantities}</p>
            <button onClick={() => navigate(`/inventory/${_id}`)}>Manage</button>
        </div>
    );
};

export default Product;