import React from "react";
import './MyToyRow.css'
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const MyToyRow = ({toy, handleDelete}) => {

    const { _id, seller, picture, toyName,subCategory, rating, price,quantity, } = toy || {};

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
            <Rating
            className="text-xl mt-1"
            placeholderRating={rating}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
            readonly
          ></Rating>
          <span className="text-sm ml-2">{rating}</span>
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
        <Link to={`/updateToy/${_id}`}>
        <button className="btn button-update btn-sm">Update</button>
        </Link>
      </td>
      <td>
      <button onClick={()=>handleDelete(_id)} className="btn button-delete btn-sm">Delete</button>
      </td>
    </tr>
  );
};

export default MyToyRow;
