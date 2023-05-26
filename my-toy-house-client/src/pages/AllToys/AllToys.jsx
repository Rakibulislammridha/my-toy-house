import React, { useEffect, useState } from "react";
import "./AllToys.css";
import { useLoaderData } from "react-router-dom";
import "./AllToys.css";
import AllToysRow from "../AllToysRow/AllToysRow";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [toys, setToys] = useState([]);
    useTitle("All Toys")

    const getToys = () => {
      var url = new URL(`https://my-toy-house-server.vercel.app/toys`);
      if(searchQuery){
        url.searchParams.append('search', searchQuery);
      }
      fetch(url)
      .then(res => res.json())
      .then(data =>{
        setToys(data)
      })
    }

  useEffect(()=>{
    getToys()
  }, [searchQuery])

  return (
    <div className="p-4">
      <h1 className="text-5xl text-center mt-4 mb-4">
        All toys: {toys.length}
      </h1>

      <div className="form-control mt-4 mb-6">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
          className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
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
                <th>Toy Details</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <AllToysRow key={toy._id} toy={toy}></AllToysRow>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default AllToys;
