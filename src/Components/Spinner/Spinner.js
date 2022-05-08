import React from 'react';
import spinner from '../../images/spinner.gif';
import './Spinner.css'

const Spinner = () => {
    return (
        <div className='spinner'>
            <img src={spinner} alt="" />
        </div>
    );
};

export default Spinner;