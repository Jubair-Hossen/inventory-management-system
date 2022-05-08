import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ManageProduct.css'

const ManageProduct = () => {
    const { id } = useParams();
    const path = `http://localhost:5000/inventory/${id}`
    const [product, setProduct] = useState({});
    const [updated, setUpdated] = useState(false);
    const { name, price, url, description, supplier, quantities } = product;
    const navigate = useNavigate();
    useEffect(() => {
        fetch(path)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [path, updated])

    const handleQuantity = (id, addedQuantity) => {
        let newQuantity;
        if (addedQuantity) {
            newQuantity = addedQuantity;
        }
        else {
            newQuantity = quantities - 1;
        }
        if (newQuantity < 0) {
            alert('This Product is Out of stock. Please add some quantity');
            return
        }

        const path = `http://localhost:5000/updatequantity/${id}`
        fetch(path, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setUpdated(!updated);
                }
            })
    }
    const handleAddQuantities = e => {
        e.preventDefault();
        const addedQuantity = quantities + parseInt(e.target.quantity.value);
        handleQuantity(id, addedQuantity);
        e.target.reset()
    }
    return (
        <section className='container'>
            <div className="product-details">
                <img src={url} alt="" />
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                    <p>Quantities: {quantities}</p>
                    <p>Supplier: {supplier}</p>
                    <button onClick={() => handleQuantity(id)}>Delivered</button>
                    <button className='btn btn-end' onClick={() => navigate('/manage-items')}>Manage Inventories</button>
                </div>
            </div>

            <div className="add-quantity">
                <h1>Restock the items</h1>
                <form onSubmit={handleAddQuantities}>
                    <input type="number" name="quantity" id="" placeholder='Quantities' required />
                    <input type="submit" value="Add Quantities" />
                </form>
            </div>
        </section>
    );
};

export default ManageProduct;