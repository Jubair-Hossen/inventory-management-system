import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import TableRow from '../ManageItems/TableRow';
import './MyItems.css';

const MyItems = () => {
    const [products, setProducts] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const url = `http://localhost:5000/productsbyuser?email=${email}`
    useEffect(() => {
        fetch(url)
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
            <h1>Items Added By You</h1>
            <div className='all-items-container'>
                <table className='inventory-table'>
                    <thead>
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

export default MyItems;