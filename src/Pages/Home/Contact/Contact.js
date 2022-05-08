import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className='suport-section container'>
            <h1>Need any support? Feel free to contact us</h1>
            <div className="suport-container">
                <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1651988021~exp=1651988621~hmac=0d242a227707aaab50f6c6455ea34b4f03e2b03386744f9bc0b9ad6ec4fbb078&w=740" alt="" />
                <div>
                    <input type="text" name="" id="name" placeholder='Enter Your Name' />
                    <input type="email" name="" id="name" placeholder='Enter Your Email' />
                    <textarea name="" id="" cols="50" rows="10" placeholder='How Can We Help You?'></textarea>
                    <button>Contact Support</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;