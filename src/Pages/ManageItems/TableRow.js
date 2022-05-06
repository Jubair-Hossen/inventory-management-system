import React from 'react';

const TableRow = ({ prodcut, index }) => {
    const { name, price, quantities, _id } = prodcut;
    return (
        <tr>
            <td>{index + 1}.</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantities}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    );
};

export default TableRow;