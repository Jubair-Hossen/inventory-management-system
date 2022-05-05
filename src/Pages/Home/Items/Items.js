import React, { useEffect, useState } from 'react';
import Product from '../../../Components/Product/Product';
import './Items.css';

const Items = () => {
    const [products, setProducts] = useState([]);
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
        </section>
    );
};

export default Items;