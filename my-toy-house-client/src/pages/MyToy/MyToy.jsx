import React, { useContext, useEffect, useState } from "react";
import "./MyToy.css";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyRow from "../MyToyRow/MyToyRow";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  useTitle("My Toys");

  const url = `https://my-toy-house-server.vercel.app/toy?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleDropdownClick = (dropdownName) => {
    setActiveTab(dropdownName);
    fetch(url + `&sort=${dropdownName}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are You Sure To Delete This Toy ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://my-toy-house-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");

              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-5xl text-center mt-4 mb-4">My toys: {toys.length}</h1>

      <div className="dropdown dropdown-hover mt-6 mb-6">
        <label tabIndex={0} className="btn m-1 sort-by-price-button">
          Sort By Price
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <div
              onClick={() => handleDropdownClick("higher")}
              className={`dropdown dropdown2 higher ${
                activeTab == "higher" ? "bg-white" : ""
              }`}
            >
              High Price To High Low
            </div>
          </li>
          <li>
            <div
              onClick={() => handleDropdownClick("lower")}
              className={`dropdown dropdown2 lower ${
                activeTab == "lower" ? "bg-white" : ""
              }`}
            >
              Low Price To High Price
            </div>
          </li>
        </ul>
      </div>

      <div className=" w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller</th>
              <th>About Toy</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub Category</th>
              <th>Update Toy</th>
              <th>Delete Toy</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <MyToyRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></MyToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
