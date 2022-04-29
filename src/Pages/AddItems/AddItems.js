import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddItems.css'

const AddItems = () => {
    const handleAddToInventory = (e) => {
        e.preventDefault();
        // get the added product
        const name = e.target.name.value;
        const description = e.target.description.value;
        const supplier = e.target.supplier.value;
        const url = e.target.url.value;
        const price = e.target.price.value;
        const quantities = e.target.quantities.value;

        const addedProduct = { name, description, supplier, url, price, quantities };
        console.log(addedProduct);

        // send the product to the server
        fetch('http://localhost:5000/add-products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.insertedId) {
                    toast("Product added succesfully");
                    e.target.reset();
                }
            })
    }
    return (
        <section className='container'>
            <h1>Add Items to the Inventory</h1>
            <div className="add-items">
                <div className="img">
                    <img src="https://img.freepik.com/free-vector/man-putting-boxes-shelves-rack_74855-10897.jpg?t=st=1651221337~exp=1651221937~hmac=cb858d7aa1cbe856c1a21ed7a7150630b3d7815711f896bafc9264f4aa44f172&w=900" alt="" />
                </div>
                <div className="input-form">
                    <form onSubmit={handleAddToInventory}>
                        <label htmlFor="name">Product Name :</label>
                        <input type="text" name="name" id="name" />

                        <label htmlFor="description">Short Description :</label>
                        <textarea name="description" id="description" rows="4"></textarea>

                        <label htmlFor="supplier">Supplier Name :</label>
                        <input type="text" name="supplier" id="supplier" />

                        <label htmlFor="url">Product Image Url :</label>
                        <input type="text" name="url" id="url" />

                        <div className="price-quantity">
                            <div>
                                <label htmlFor="price">Price :</label>
                                <input type="text" name="price" id="price" />
                            </div>

                            <div>
                                <label htmlFor="quantities">Quantities :</label>
                                <input type="text" name="quantities" id="quantities" />
                            </div>
                        </div>

                        <input type="submit" value="Add To Inventory" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddItems;