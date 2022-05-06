import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const TableRow = ({ product, handleDelete, index }) => {
    const { name, url, price, quantities, _id } = product;

    const handleEdit = id => {
        console.log("edited", id);
    }

    return (
        <tr>
            <td>{index + 1}.</td>
            <td><img src={url} alt="" />{name}</td>
            <td>$ {price}</td>
            <td>{quantities}</td>
            <td>
                <FontAwesomeIcon onClick={() => handleEdit(_id)} className='edit' icon={faEdit} />
                <FontAwesomeIcon onClick={() => handleDelete(_id)} className='delete' icon={faTrash} />
            </td>
        </tr>
    );
};

export default TableRow;