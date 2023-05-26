import React from "react";
import './DiscoverCollection.css'
import discoverPhoto from '../../../assets/discover.png'

const DiscoverCollection = () => {
  return (
    <div className="text-5xl mt-6 p-4 discover-container">
      <h1
        className="text-center mb-4"
      >
        Discover <span>Our Collection</span>
      </h1>
      <div
        className="flex p-6"
      >
        <div className="w-1/2">
          <h1 className="text-3xl">
          Action Figure Universe:<span> Your Gateway to Collectible Adventures</span>
          </h1>
          <p className="text-sm mt-2">
          Welcome to Action Figure Universe, the ultimate destination for action figure enthusiasts and collectors! Step into a world where imagination knows no bounds and embark on thrilling adventures with our vast collection of action figures. Whether you're a seasoned collector or a passionate fan, our website is your gateway to the fascinating realm of action figure toys.
          </p>
          <button className="btn-discover">
            Let's Get Start
          </button>
        </div>
          <div className="discover-image">
          <img className="rounded mb-3 md:mb-0" src={discoverPhoto} alt="" />
          </div>
      </div>
    </div>
  );
};

export default DiscoverCollection;
