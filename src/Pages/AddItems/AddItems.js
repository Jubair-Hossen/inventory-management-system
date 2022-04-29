import React from 'react';
import './AddItems.css'

const AddItems = () => {
    return (
        <section className='container'>
            <h1>Add Items to the Inventory</h1>
            <div className="add-items">
                <div className="img">
                    <img src="https://img.freepik.com/free-vector/man-putting-boxes-shelves-rack_74855-10897.jpg?t=st=1651221337~exp=1651221937~hmac=cb858d7aa1cbe856c1a21ed7a7150630b3d7815711f896bafc9264f4aa44f172&w=900" alt="" />
                </div>
                <div className="input-form">
                    <form action="">
                        <label htmlFor="name">Product Name :</label>
                        <input type="text" name="name" id="name" />

                        <label htmlFor="description">Short Description :</label>
                        <textarea name="description" id="description" rows="4"></textarea>

                        <label htmlFor="supplier">Supplier Name :</label>
                        <input type="text" name="supplier" id="supplier" />

                        <label htmlFor="url">Product Image Url :</label>
                        <input type="text" name="url" id="url" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddItems;