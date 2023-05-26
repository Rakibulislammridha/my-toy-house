import { Link, useLoaderData } from "react-router-dom";
import "./SingleToyDetails.css";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const SingleToyDetails = () => {
  const toy = useLoaderData();
  useTitle("Toy Details")

  const {
    picture,
    price,
    details,
    email,
    quantity,
    rating,
    seller,
    toyName,
  } = toy;

  return (
    <div className="text-5xl mt-6 p-4 single-toy-container">
      <h1 className="text-center mb-4">
        Toy <span>Information</span>
      </h1>
      <div className="flex p-6">
        <div className="single-toy-image mr-6">
          <img className="rounded mb-3 md:mb-0" src={picture} alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl">Toy Name : {toyName}</h1>
          <p className="text-sm mt-2">Price : ${price}</p>
          <p className="text-sm mt-2">Quantity : {quantity}</p>
          <p className="text-sm mt-2">Seller Name : {seller}</p>
          <p className="text-sm mt-2">Seller Email : {email}</p>
          <p className="text-sm mt-2">Toy Description : {details}</p>
          <div className="flex justify-between mt-4">
          <div>
          <Rating
            className="text-xl mt-1"
            placeholderRating={rating}
            emptySymbol={
              <FaRegStar></FaRegStar>
            }
            placeholderSymbol={
              <FaStar className="text-warning"></FaStar>
            }
            fullSymbol={
              <FaStar></FaStar>
            }
            readonly
          ></Rating>
          <span className="text-sm ml-2">{rating}</span>
          </div>
            <Link to="/allToys">
            <button className="btn-single-toy mt-6">Back To All Toys</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
