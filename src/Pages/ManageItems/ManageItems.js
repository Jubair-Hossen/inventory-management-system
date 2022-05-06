import React, { useEffect, useState } from 'react';
import './ManageItems.css'
import TableRow from './TableRow';

const ManageItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <section className='container'>
            <h1>Manage Inventory Items</h1>
            <div className='all-items-container'>
                <table className='inventory-table'>
                    <thead>
                        <tr>
                            <th>SI.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <TableRow
                                key={product._id}
                                prodcut={product}
                                index={index}
                            ></TableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageItems;