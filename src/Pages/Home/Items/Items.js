import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../../../Components/Product/Product';
import Spinner from '../../../Components/Spinner/Spinner';
import './Items.css';

const Items = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://lit-woodland-54161.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <section className='container'>
            <h1>Managed products By Users</h1>
            {products.length ?
                <div className="products-container">
                    {
                        products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
                :
                <Spinner></Spinner>
            }
            <button className='btn btn-end' onClick={() => navigate('/manage-items')}>Manage Inventories</button>
        </section>
    );
};

export default Items;