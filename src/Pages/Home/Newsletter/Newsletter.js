import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <div className="container">
                <h1>Subscribe Out Newsletter for latest update</h1>
                <input type="text" name="" id="" placeholder='Enter Your Email' />
                <button>Subscribe</button>
            </div>
        </section>
    );
};

export default Newsletter;