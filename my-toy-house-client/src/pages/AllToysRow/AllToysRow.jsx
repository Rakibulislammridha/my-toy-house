import React from 'react';
import './AllToysRow.css'
import { Link } from 'react-router-dom';

const AllToysRow = ({toy}) => {

    const { _id, seller, picture, toyName,subCategory, price,quantity, } = toy;

    return (
        <tr>
      <th>
        {seller}
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={picture}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
          </div>
        </div>
      </td>
      <td>
        ${price}
      </td>
      <td>
        {quantity}
      </td>
      <td>
        {subCategory}
      </td>
      <td>
        <Link to={`/SingleToyDetails/${_id}`}>
        <button className="btn button-update btn-sm">Details</button>
        </Link>
      </td>
    </tr>
    );
};

export default AllToysRow;