import React from "react";
import './OurFranchise.css'
import franchise1 from '../../../assets/frn1.png'
import franchise2 from '../../../assets/frn2.png'
import franchise3 from '../../../assets/frn3.png'
import franchise4 from '../../../assets/frn4.png'

const OurFranchise = () => {
  return (
    <div className="p-4">
      <h1
        className="text-center mb-4 text-5xl"
      >
        Explore <span className="franchise-title">Our Franchise's</span>
      </h1>
      <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
          <img src={franchise1} className="w-full h-1/2" />
          <div className="absolute rounded-xl items-center p-4 top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-gray-200">
            <h2 className="text-3xl text-center font-bold mt-28">
              Heroes United : <br /> The Power of Marvel
            </h2>
            <p className="text-sm text-center mt-4 p-4">Welcome to Heroes United, where the extraordinary world of Marvel comes alive! Immerse yourself in the epic tales of iconic superheroes and villains from the Marvel Universe. Unleash your imagination as you join forces with the likes of Spider-Man, Iron Man, Captain America, and the Avengers to defend the world against formidable foes.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={franchise2}
            className="w-full"
          />
          <div className="absolute rounded-xl items-center p-4 top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
            <h2 className="text-3xl text-center font-bold mt-28">Galactic Legends: <br /> Star Wars Odyssey</h2>
            <p className="text-sm text-center mt-4 p-4">Enter a galaxy far, far away with Galactic Legends: Star Wars Odyssey! Experience the timeless saga of Star Wars through our extensive range of action figures that pay homage to the iconic heroes, villains, star-ships, and alien creatures that have captivated audiences for generations.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={franchise3}
            className="w-full"
          />
          <div className="absolute rounded-xl items-center p-4 top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
            <h2 className="text-3xl text-center font-bold mt-28">Mystic Realms: <br /> Legends of Middle-earth</h2>
            <p className="text-sm text-center mt-4 p-4">Embark on a fantastical journey to the Mystic Realms: Legends of Middle-earth! Inspired by J.R.R. Tolkien's timeless masterpiece, The Lord of the Rings, and The Hobbit, our collection of action figures brings to life the enchanting world of Middle-earth.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={franchise4}
            className="w-full"
          />
          <div className="absolute rounded-xl items-center p-4 top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
            <h2 className="text-3xl text-center font-bold mt-28">Ninja Legends: <br /> Masters of the Shadows</h2>
            <p className="text-sm text-center mt-4 p-4">Prepare for stealth, skill, and excitement in Ninja Legends: Masters of the Shadows! Step into the clandestine world of ancient Japanese martial arts and embrace the way of the ninja. Our collection of action figures embodies the mystique and agility of these legendary warriors.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFranchise;
