import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ManageItems.css';
import TableRow from './TableRow';

const ManageItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = id => {
        const sure = window.confirm("Are you sure? you want to delete.")
        if (!sure) {
            return
        }
        const url = `http://localhost:5000/delete/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
                    toast("Item Deleted")

                }
            })
    }
    return (
        <section className='container'>
            <h1>Manage Inventory Items</h1>
            <div className='all-items-container'>
                <table className='inventory-table'>
                    <thead>
                        {products ? "" : 'loading...'}
                        <tr>
                            <th>SI.</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <TableRow
                                key={product._id}
                                product={product}
                                handleDelete={handleDelete}
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