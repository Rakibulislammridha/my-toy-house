import React, { useContext } from "react";
import "./AddToy.css";
import { AuthContext } from "../../providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  useTitle("Add-Toy");

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const picture = form.picture.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const subCategory = form.subCategory.value;
    const addToys = {
      toyName,
      picture,
      seller,
      email,
      price,
      rating,
      quantity,
      details,
      subCategory,
    };
    console.log(addToys);

    fetch("https://my-toy-house-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Toy Added Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center">Add A Toy</h1>
      <div className="card-body">
        <form onSubmit={handleAddToy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                name="toyName"
                placeholder="Toy Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="picture"
                placeholder="Enter A Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                name="seller"
                defaultValue={user?.displayName}
                placeholder="Enter You Name"
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                defaultValue={user?.email}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Detail</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Toy Detail"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub Categories</span>
              </label>
              <select name="subCategory" className="select select-bordered" 
              required
              >
                <option disabled selected>
                  Select Categories
                </option>
                <option>Avengers</option>
                <option>Star Wars</option>
                <option>Marvel</option>
              </select>
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn add-toy-button btn-block"
              type="submit"
              value="Add Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
