import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Product from '../../../Components/Product/Product';
import './Items.css';

const Items = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <section className='container'>
            <h1>Managed products By Users</h1>
            <div className="products-container">
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <button className='btn btn-end' onClick={() => navigate('/manage-items')}>Manage Inventories</button>
        </section>
    );
};

export default Items;