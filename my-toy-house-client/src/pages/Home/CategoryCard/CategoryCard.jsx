import React, { useContext, useEffect } from "react";
import "./CategoryCard.css";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link , useNavigate} from "react-router-dom";
import AOS from 'aos';
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const CategoryCard = ({ category }) => {
  const {_id, picture, toyName, rating, price } = category;

  const {user} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleDetailsClick = () => {
    if (!user) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'You have to login first to view the item',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        navigate("/login");
      });
    } else {
      navigate(`/SingleToyDetails/${_id}`);
    }
  };

  useEffect(()=>{
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-up" data-aos-delay="100">
      <div className="card card-compact w-96 bg-base-100 shadow-xl grid-cols-3">
        <figure>
          <img className="card-image" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body justify-start">
          <h2 className="card-title mx-auto">{toyName}</h2>
          <p>Price: ${price}</p>
          <Rating
            className="text-xl mt-1"
            placeholderRating={rating}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
            readonly
          ></Rating>
          <span className="text-sm ml-2">{rating}</span>
          <div className="card-actions justify-center">
          {!user && (
              <button
                className="btn button-update btn-sm"
                onClick={handleDetailsClick}
              >
                Details
              </button>
            )}
            {user && (
              <Link to={`/SingleToyDetails/${_id}`}>
                <button className="btn button-update btn-sm">Details</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
